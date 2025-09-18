// Helper functions for handling authentication
export const authUtils = {
  // Store token in localStorage (you might want to use more secure storage)
  setToken: (token) => {
    localStorage.setItem("auth_token", token);
  },

  // Get token from localStorage
  getToken: () => {
    return localStorage.getItem("auth_token");
  },

  // Remove token
  removeToken: () => {
    localStorage.removeItem("auth_token");
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem("auth_token");
  },
};

// Sample authentication functions (you can expand these)
export const authApi = {
  // Register user
  register: async (userData) => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();

      if (data.success && data.data.token) {
        authUtils.setToken(data.data.token);
      }

      return data;
    } catch (error) {
      throw new Error("Registration failed: " + error.message);
    }
  },

  // Login user
  login: async (credentials) => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();

      if (data.success && data.data.token) {
        authUtils.setToken(data.data.token);
      }

      return data;
    } catch (error) {
      throw new Error("Login failed: " + error.message);
    }
  },

  // Logout user
  logout: async () => {
    try {
      const token = authUtils.getToken();
      if (token) {
        await fetch("http://localhost:8000/api/v1/logout", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
      }
      authUtils.removeToken();
    } catch (error) {
      // Even if logout fails, remove token locally
      authUtils.removeToken();
      throw new Error("Logout failed: " + error.message);
    }
  },
};
