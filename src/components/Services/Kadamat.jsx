import icon1 from "../../assets/images/icon-1.png";
import icon2 from "../../assets/images/icon-2.png";
import icon3 from "../../assets/images/icon-3.png";
import icon4 from "../../assets/images/icon-4.png";
import heroImg from "../../assets/images/about-img.png";
import { getProjects } from "../../Api";

const services = [
  {
    title: "بناء الشركات الناشئة",
    desc: "نعمل على تطوير الأفكار سواء كانت ناشئة أو من رواد أعمال لتصبح مشاريعها شركات ناشئة متكاملة.",
    img: icon1,
  },
  {
    title: "تطوير المنتج الأول",
    desc: "نقدم خدمة مميزة لتطوير النماذج الأولية (MVP) باستخدام تقنيات الذكاء الصناعي لانتشار المنتجات في السوق بأقل التكاليف.",
    img: icon2,
  },
  {
    title: "الاستثمار الملائكي",
    desc: "نستثمر في المراحل المبكرة للشركات الناشئة لتمويل النمو ودعم الأفكار المبتكرة.",
    img: icon3,
  },
  {
    title: "الاستشارات الاستراتيجية",
    desc: "نقدم استشارات استراتيجية شاملة حول كيفية بناء وتكامل تقنيات الذكاء الصناعي لتحقيق النمو.",
    img: icon4,
  },
];

export default function Kadamat() {
  return (
        <main className="font-sans text-gray-800 bg-white" dir="rtl">
          {/* Header Section */}
          <section className="container flex items-center gap-12 mx-auto px-6 py-12">
            {/* صورة الهيدر */}
            <div className="mt-6">
              <img
                src={heroImg}
                alt="team working"
                className="rounded-xl shadow-lg"
              />
            </div>
    
            {/* النصوص */}
            <div className="mt-6">
              <h4 className="text-sm text-blue-500 font-semibold mb-2">خدماتنا</h4>
              <h2 className="text-2xl font-bold mb-4">خدماتنا المبتكرة</h2>
              <p className="text-gray-600 max-w-2xl leading-relaxed">
                نقدم مجموعة متكاملة من الخدمات التي تدعم إبداعك الريادي بدءاً من
                تحويل الأفكار إلى شركات ناشئة مروراً بتطوير النماذج الأولية باستخدام
                تقنيات الذكاء الصناعي، وصولاً إلى الاستثمار والاستشارات
                الاستراتيجية التي تساعدك على تحقيق النمو والاستدامة.
              </p>
            </div>
          </section>
    
          {/* Services Cards */}
          <section className="bg-gray-50 py-12">
            <div className="container mx-auto px-6 text-center">
              <h4 className="text-sm text-blue-500 font-semibold mb-2">من نحن</h4>
              <h2 className="text-2xl font-bold mb-8">
                التكنولوجيا في خدمتك... انقل عملك إلى مستوى جديد
              </h2>
    
              {/* الكروت */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl shadow py-3 px-2 pt-0 flex flex-col justify-between border hover:shadow-lg transition text-center"
                  >
                    {/* صورة الخدمة */}
                    <div className="flex justify-center">
                      <img
                        src={service.img}
                        alt="service icon"
                        className="w-24 mb-2 object-contain object-top mx-auto"
                      />
                    </div>
    
                    {/* العنوان والوصف */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
    
                    {/* الزر */}
                    <div className="btn flex items-center justify-center gap-3 mt-4">
                      <span className="main-text font-medium">اكتشف المزيد</span>
                      <span className="w-9 h-9 flex items-center justify-center bg-main2 rounded-full shadow-md">
                        <i className="fa-solid fa-arrow-left text-[#013366]"></i>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
  )
}
