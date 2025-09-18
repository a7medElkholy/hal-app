import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { projectsApi } from "../../services/api";
import styles from "./HomeSlider.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import imgSlider from "../../assets/images/img-slider.png";

export default function HomeSlider() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        // Fetch projects with pagination to get recent projects
        const response = await projectsApi.getAll({
          per_page: 8, // Limit to 8 projects for the slider
          sort_by: 'created_at',
          sort_order: 'desc'
        });

        if (response.success) {
          setProjects(response.data.data || []);
        } else {
          setError('Failed to load projects');
        }
      } catch (err) {
        console.error('Error fetching projects:', err);

        // Fallback to mock data if API is not available
        const mockProjects = [
          {
            id: 1,
            title: "مشروع الذكاء الاصطناعي",
            description: "نقدّم حلولًا تقنية متقدمة لإدارة العقارات وتحليل السوق باستخدام الذكاء الاصطناعي",
            field: "التكنولوجيا",
            category: { title: "تطوير البرمجيات" }
          },
          {
            id: 2,
            title: "منصة التجارة الإلكترونية",
            description: "منصة شاملة للتجارة الإلكترونية مع إدارة المخزون والمدفوعات الآمنة",
            field: "التجارة الإلكترونية",
            category: { title: "تطبيقات الويب" }
          },
          {
            id: 3,
            title: "تطبيق إدارة المشاريع",
            description: "أداة قوية لإدارة المشاريع وتتبع المهام وتحسين الإنتاجية",
            field: "إدارة الأعمال",
            category: { title: "تطبيقات الأعمال" }
          }
        ];

        setProjects(mockProjects);
        setError(null); // Clear error since we're using fallback data
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-main"></div>
        <span className="ml-2 text-gray-600">جاري تحميل المشاريع...</span>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="text-red-500 text-lg mb-2">خطأ في تحميل المشاريع</div>
          <div className="text-gray-600">{error}</div>
        </div>
      </div>
    );
  }

  // Show empty state
  if (projects.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="text-gray-500 text-lg">لا توجد مشاريع متاحة حاليًا</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop={true}
        grabCursor={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
          1280: { slidesPerView: 4, spaceBetween: 24 },
        }}
        className="!pb-12 !px-4"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id || index}>
            <div className="h-full">
              {/* Custom Card Design */}
              <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col overflow-hidden group ${styles['project-card']}`}>
                {/* Image Section */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={imgSlider}
                    alt={project.title || "Project Image"}
                    className="w-full h-48 sm:h-52 md:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Field Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#E2F2F7] text-[#0C1D36] px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-sm">
                      {project.field || "عام"}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`p-4 sm:p-5 flex-1 flex flex-col ${styles['arabic-text']}`}>
                  {/* Title */}
                  <h3 className={`text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight ${styles['line-clamp-2']}`}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm sm:text-base text-gray-600 mb-6 leading-relaxed flex-1 ${styles['line-clamp-3']}`}>
                    {project.description || "وصف المشروع غير متاح"}
                  </p>                  {/* CTA Button */}
                  <div className="mt-auto">
                    <button className={`w-full text-white rounded-xl px-4 py-3 flex items-center justify-between transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg group/btn ${styles['cta-button']}`}>
                      <span className="text-sm sm:text-base font-medium">اعرف المزيد</span>
                      <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-1">
                        <i className="fa-solid fa-arrow-left text-sm"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
