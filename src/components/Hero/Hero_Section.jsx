import React, { useState, useLayoutEffect } from 'react';

// --- Reusable Hook to get window size ---
const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

// --- Reusable SVG & UI Components ---
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);



const ActionButton = ({ text, className }) => (
  <a href="#" className={`flex hover:text-white text-black items-center justify-center gap-4 px-4 py-4 border-2 bg-white hover:border-white rounded-full text-lg font-semibold transition-all duration-300 hover:bg-transparent hover:scale-101 ${className}`}>
    <span className="mr-2 text-xl">{text}</span>
    <div className="bg-[#013366] text-white p-2 hover:scale-102 rounded-full p-1">
      <ArrowIcon />
    </div>
  </a>
);

// --- Desktop-Specific Hero Component ---
const DesktopHero = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col">



      {/* Main Content */}
      <main className="relative z-10 flex-grow flex items-center w-full">
        <div className="xl:container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center px-4 sm:px-8">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl leading-8 font-extrabold lg:leading-relaxed">
              نُطوِّر أعمالك بحلول ذكاء
              اصطناعي مبتكرة
            </h1>
            <p className="mt-6 text-lg sm:text-xl max-w-2xl leading-8 text-gray-200">
              ساعدك على الابتكار والأتمتة وتوسيع أعمالك من خلال حلول ذكاء اصطناعي وتقنيات متقدمة مصممة خصيصًا لنجاحك في سوق سريع التغير.
            </p>
            <div className="mt-10">
              <ActionButton text="ابدء رحلتك الان!" />
            </div>
          </div>
          <div className="xl:absolute left-0 top-1/4">
            <img
              src={'./src/assets/images/img-hero.png'}
              alt="AI Robotic Hand"
              className="w-full Robotic max-w-2xl h-auto transform  scale-y-100 -scale-x-100"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

// --- Mobile/Tablet-Specific Hero Component ---
const MobileHero = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <main className="relative z-10 flex-grow flex items-center w-full">
        <div className="container mx-auto grid grid-cols-1 items-center px-4 sm:px-8 text-center">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-normal">
              نُطوِّر أعمالك بحلول ذكاء
              اصطناعي مبتكرة
            </h1>
            <p className="mt-6 text-lg sm:text-xl max-w-2xl text-gray-200 leading-relaxed">
              ساعدك على الابتكار والأتمتة وتوسيع أعمالك من خلال حلول ذكاء اصطناعي وتقنيات متقدمة مصممة خصيصًا لنجاحك في سوق سريع التغير.
            </p>
            <div className="mt-10">
              <ActionButton text="ابدء رحلتك الان!" />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <img
              src={'./src/assets/images/img-hero.png'}
              alt="AI Robotic Hand"
              className="w-full max-w-sm h-auto transform -scale-x-100"
            />
          </div>
        </div>
      </main>
    </div>
  );
};


// --- Main Hero Component (Conditional Renderer) ---
const Hero = () => {
  const [width] = useWindowSize();
  const isDesktop = width >= 1024; // Tailwind's 'lg' breakpoint

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat text-white flex flex-col overflow-x-hidden"
      style={{ backgroundImage: `url(./src/assets/images/bghero.jpg)`, fontStyle: "bold", fontFamily: "Cairo, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" }}
      dir="rtl"
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      {isDesktop ? <DesktopHero /> : <MobileHero />}
    </div>
  );
};

export default Hero;

