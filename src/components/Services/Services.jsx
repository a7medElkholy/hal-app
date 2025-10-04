import heroImg from "../../assets/images/about-img.png";
import kadamatImg from "../../assets/images/kadamatImg.png";
import imgSlider from "../../assets/images/img-slider.png";
import { Card } from "flowbite-react"
import logo1 from "../../assets/images/logo-1.png";
import logo2 from "../../assets/images/logo-2.png";
import logo3 from "../../assets/images/logo-3.png";
import logo4 from "../../assets/images/logo-4.png";
import logo5 from "../../assets/images/logo-5.png";
import { Navigation } from 'swiper/modules';
import { data, Link } from "react-router-dom";
import { getProjects } from "../../Api";



const steps = [
    {
      id: 1,
      title: "دراسة الفكرة والسوق",
      desc: "تحليل شامل لفكرتك ودراسة السوق المستهدف والمنافسين",
    },
    {
      id: 2,
      title: "تطوير الاستراتيجية",
      desc: "وضع خطة عمل متكاملة واستراتيجية تقنية مناسبة",
    },
    {
      id: 3,
      title: "التصميم والتطوير",
      desc: "تصميم وتطوير المنتج باستخدام أحدث التقنيات",
    },
    {
      id: 4,
      title: "الاختبار والتحسين",
      desc: "اختبار شامل للمنتج وتحسينه بناءً على التغذية الراجعة",
    },
    {
      id: 5,
      title: "الإطلاق والنمو",
      desc: "إطلاق المنتج ومتابعة النمو والتطوير المستمر",
    },
  ];

  // const project = await 
   const pro =  getProjects();
   console.log("pro", pro);
   

export default function Services() {
  return (

    <main className="font-sans text-gray-800" dir="rtl">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              بناء الشركات الناشئة
            </h2>
            <p className="text-gray-600 leading-relaxed">
              نجعل أفكارك الابتكارية شركات ناشئة ناجحة وقابلة للنمو من خلال الاعتماد
              على أحدث تقنيات الذكاء الاصطناعي، والحلول التكنولوجية المتطورة لنساعدك
              في بناء أساس قوي وتحويل فكرتك إلى منتج مبتكر يحقق تأثيرًا في السوق.
            </p>
            <Link to="/kadamat" className="btn w-50">
                <span  className="main-text ml-3 font-medium">
                  ابدا مشروعك الان
                </span>
                <span className="w-9 h-9 flex items-center justify-center bg-main2 rounded-full main-text shadow-md">
                  <i className="fa-solid fa-arrow-left text-[#013366]"></i>
                </span>
              </Link>
          </div>
          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={heroImg}
              alt="startup team"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4">ما نقدمه لك</h3>
          <p className="text-gray-600 mb-10">
            خدمات شاملة لبناء شركاتك الناشئة من الصفر إلى النجاح
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Service Card */}
            <div className="bg-[#E9F4F9] p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="mb-4 flex justify-center">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-100 text-sky-600">
                  <img src={logo1} alt="logo" />
                </span>
              </div>
              <h4 className="font-semibold text-lg mb-2">بناء الفريق المناسب</h4>
              <p className="text-gray-600 text-sm">
                مساعدتك في اختيار وبناء فريق عمل متخصص ومنسجم
              </p>
            </div>

            <div className="bg-[#E9F4F9] p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="mb-4 flex justify-center">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-100 text-sky-600">
                   <img src={logo2} alt="logo" />
                </span>
              </div>
              <h4 className="font-semibold text-lg mb-2">
                التطوير التقني المتقدم
              </h4>
              <p className="text-gray-600 text-sm">
                بناء منتجات رقمية متطورة باستخدام أحدث التقنيات والذكاء الاصطناعي
              </p>
            </div>

            <div className="bg-[#E9F4F9] p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="mb-4 flex justify-center">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-100 text-sky-600">
                   <img src={logo3} alt="logo" />
                </span>
              </div>
              <h4 className="font-semibold text-lg mb-2">
                تطوير الفكرة والاستراتيجية
              </h4>
              <p className="text-gray-600 text-sm">
                نساعدك في صقل فكرتك وتطوير استراتيجية عمل قوية ومرسومة
              </p>
            </div>

            <div className=" bg-[#E9F4F9] p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="mb-4 flex justify-center">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-100 text-sky-600">
                   <img src={logo4} alt="logo" />
                </span>
              </div>
              <h4 className="font-semibold text-lg mb-2">النمو والتوسع</h4>
              <p className="text-gray-600 text-sm">
                استراتيجيات النمو المستدام وخطط التوسع في الأسواق الجديدة
              </p>
            </div>

            <div className="bg-[#E9F4F9] p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="mb-4 flex justify-center">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-100 text-sky-600">
                   <img src={logo5} alt="logo" />
                </span>
              </div>
              <h4 className="font-semibold text-lg mb-2">استراتيجية التسويق</h4>
              <p className="text-gray-600 text-sm">
                تطوير خطط تسويقية فعالة للوصول إلى جمهورك المستهدف
              </p>
            </div>
          </div>
        </div>
      </section>

     <section className="bg-gray-50 py-16" dir="rtl">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            كيف نعمل معك
          </h2>
          <p className="text-gray-600 mt-2">
            عملية منظمة ومدروسة لضمان نجاح مشروعك
          </p>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Right Image */}
          <div className="flex justify-center order-1 md:order-2">
            <img
              src={kadamatImg}
              alt="Work process"
              className="rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Left Steps */}
          <div className="relative order-2 md:order-1">
            {/* Vertical Line with Diamonds */}
            <div className="absolute left-[120] top-0 bottom-0 flex flex-col items-center">
              {/* Top diamond */}
              <div className="w-5 h-5 bg-sky-900 rotate-228"></div>
              {/* Line */}
              <div className="flex-1 w-[3px] bg-sky-900"></div>
              {/* Bottom diamond */}
              <div className="w-5 h-5 bg-sky-900 rotate-228"></div>
            </div>

            <div className="space-y-6 pr-24">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="relative bg-white rounded-lg shadow p-5"
                >
                  {/* Number Circle */}
                  <div className="absolute -right-[70px] top-2/3 -translate-y-1/2 w-10 h-10 rounded-full bg-sky-900 text-white flex items-center justify-center font-bold shadow-lg">
                    {step.id}
                  </div>
                  <h4 className="font-semibold text-lg mb-1">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

     {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            قصه نجاح
          </h2>
          <p className="text-gray-600 mt-2">
            مثال علي احدي الشركات الناشئه ال ساعدناها في تحقيق النجاح
          </p>
        </div>

<div className="flex">

<div className="py-4 text-right px-3">
  <Card
    className="max-w-96 bg-imp p-2 border-sky-950 border-2 rounded-3xl"
    imgAlt="Meaningful alt text"
    imgSrc={imgSlider} // غيّر المسار ده للصورة اللي عايزها
  >
    <span className="bg-[#E2F2F7] rounded-full ml-auto p-1 w-[130px] text-center">
     الذكاء الاصطناعي
    </span>
    <h5 className="text-2xl font-bold tracking-tight">
      مشاريعنا العقاريه الذكيه
    </h5>
    <p className="font-normal">
      تقدّم حلولاً تقنية متقدمة لإدارة العقارات وتحليل السوق باستخدام الذكاء الاصطناعي، مع أدوات للتنبّؤ بالأسعار واتخاذ قرارات دقيقة
    </p>
    <div className="bg-main rounded-3xl px-3 py-2 flex items-center justify-between w-full ml-auto">
       <span className="main-text"> اكتشف المزيد </span>
      <span className="w-8 h-8 flex items-center justify-center bg-main2 rounded-full main-text">
        <i className="fa-solid fa-arrow-left text-[#013366]"></i>
      </span>
    </div>
  </Card>
</div>

<div className="py-4 text-right px-3">
  <Card
    className="max-w-96 bg-imp p-2 border-sky-950 border-2 rounded-3xl"
    imgAlt="Meaningful alt text"
    imgSrc={imgSlider} // غيّر المسار ده للصورة اللي عايزها
  >
    <span className="bg-[#E2F2F7] rounded-full ml-auto p-1 w-[130px] text-center">
     الذكاء الاصطناعي
    </span>
    <h5 className="text-2xl font-bold tracking-tight">
      مشاريعنا العقاريه الذكيه
    </h5>
    <p className="font-normal">
      تقدّم حلولاً تقنية متقدمة لإدارة العقارات وتحليل السوق باستخدام الذكاء الاصطناعي، مع أدوات للتنبّؤ بالأسعار واتخاذ قرارات دقيقة
    </p>
    <div className="bg-main rounded-3xl px-3 py-2 flex items-center justify-between w-full ml-auto">
       <span className="main-text"> اكتشف المزيد </span>
      <span className="w-8 h-8 flex items-center justify-center bg-main2 rounded-full main-text">
        <i className="fa-solid fa-arrow-left text-[#013366]"></i>
      </span>
    </div>
  </Card>
</div>

<div className="py-4 text-right px-3">
  <Card
    className="max-w-96 bg-imp p-2 border-sky-950 border-2 rounded-3xl"
    imgAlt="Meaningful alt text"
    imgSrc={imgSlider} // غيّر المسار ده للصورة اللي عايزها
  >
    <span className="bg-[#E2F2F7] rounded-full ml-auto p-1 w-[130px] text-center">
     الذكاء الاصطناعي
    </span>
    <h5 className="text-2xl font-bold tracking-tight">
      مشاريعنا العقاريه الذكيه
    </h5>
    <p className="font-normal">
      تقدّم حلولاً تقنية متقدمة لإدارة العقارات وتحليل السوق باستخدام الذكاء الاصطناعي، مع أدوات للتنبّؤ بالأسعار واتخاذ قرارات دقيقة
    </p>
    <div className="bg-main rounded-3xl px-3 py-2 flex items-center justify-between w-full ml-auto">
       <span className="main-text"> اكتشف المزيد </span>
      <span className="w-8 h-8 flex items-center justify-center bg-main2 rounded-full main-text">
        <i className="fa-solid fa-arrow-left text-[#013366]"></i>
      </span>
    </div>
  </Card>
</div>

{/* <div className="flex justify-center items-center min-h-screen">
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="py-4 text-right px-3">
            <div className="max-w-96 bg-imp p-2 border-sky-950 border-2 rounded-3xl">
              <img
                src={imgSlider}
                alt="Meaningful alt text"
                className="rounded-2xl mb-3"
              />

              <span className="bg-[#E2F2F7] rounded-full ml-auto p-1 w-[130px] text-center block">
                {project.tag}
              </span>

              <h5 className="text-2xl font-bold tracking-tight">{project.title}</h5>

              <p className="font-normal">{project.description}</p>

              <div className="bg-main rounded-3xl px-3 py-2 flex items-center justify-between w-full ml-auto cursor-pointer">
                <span className="main-text">{project.linkText}</span>
                <span className="w-8 h-8 flex items-center justify-center bg-main2 rounded-full main-text">
                  <i className="fa-solid fa-arrow-left text-[#013366]"></i>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div> */}

</div>

    </main>
  );
}
