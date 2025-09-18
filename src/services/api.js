import axios from "axios";

// Base API configuration
const API_BASE_URL = "http://localhost:8000/api/v1";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor for authentication if needed
api.interceptors.request.use(
  (config) => {
    // Add auth token if available in localStorage or other storage
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  },
);

// Projects API functions
export const projectsApi = {
  // Get all projects with optional filters
  getAll: async (params = {}) => {
    try {
      const response = await api.get("/projects", { params });
      return response.data;
    } catch (error) {
      // If authentication error, try without token for public endpoints
      if (error.response?.status === 401) {
        try {
          const publicResponse = await axios.get(`${API_BASE_URL}/projects`, {
            params,
            headers: { "Content-Type": "application/json" },
          });
          return publicResponse.data;
        } catch (publicError) {
          throw new Error(
            publicError.response?.data?.message || "Failed to fetch projects",
          );
        }
      }
      throw new Error(
        error.response?.data?.message || "Failed to fetch projects",
      );
    }
  },

  // Get single project by ID
  getById: async (id) => {
    try {
      const response = await api.get(`/projects/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch project",
      );
    }
  },

  // Get featured projects
  getFeatured: async (limit = 10) => {
    try {
      const response = await api.get(`/projects/featured?limit=${limit}`);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch featured projects",
      );
    }
  },

  // Create new project
  create: async (projectData) => {
    try {
      const response = await api.post("/projects", projectData);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to create project",
      );
    }
  },

  // Update project
  update: async (id, projectData) => {
    try {
      const response = await api.put(`/projects/${id}`, projectData);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to update project",
      );
    }
  },

  // Delete project
  delete: async (id) => {
    try {
      const response = await api.delete(`/projects/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to delete project",
      );
    }
  },
};

// Categories API functions
export const categoriesApi = {
  getAll: async (params = {}) => {
    try {
      const response = await api.get("/categories", { params });
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch categories",
      );
    }
  },
};

// Ideas API functions
export const ideasApi = {
  getAll: async (params = {}) => {
    try {
      const response = await api.get("/ideas", { params });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to fetch ideas");
    }
  },
};

export default api;
