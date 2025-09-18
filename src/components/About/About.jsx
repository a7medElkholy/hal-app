import heroImg from "../../assets/images/about-img.png";
import arrowImg from "../../assets/images/arrow.png";
import frameEye from "../../assets/images/frame-eye.png";
import frameMicro from "../../assets/images/frame-micro.png";

export default function About() {
  return (
    <main className="font-csans text-gray-800" dir="rtl">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-center">
        {/* Text */}
        <div className="space-y-3 sm:space-y-4 order-2 md:order-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed">
            التكنولوجيا في خدمتك... انقل عملك إلى مستوى جديد
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-loose">
            باستخدام مجموعة من الاستراتيجيات الحديثة التي تشمل تقنيات الذكاء
            الاصطناعي وتحليل البيانات والتعلم الآلي، نقدم تصميم وتطوير أنظمة
            مبتكرة تمكن عملك من تحقيق أداء أفضل. فريقنا المتخصص جاهز لمساعدتك
            في بناء حلول مخصصة تلبي تطلعاتك وتضمن استمرارية عالية.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center order-1 md:order-2">
          <img
            src={heroImg}
            alt="Team working"
            width={500}
            height={300}
            className="w-full max-w-sm sm:max-w-md md:max-w-full rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* Steps Section */}
      <section className="mt-5 pt-5 leading-relaxed">
        <div className="space-y-3 sm:space-y-4 px-4 sm:px-6">
          <h3 className="text-center text-lg sm:text-xl md:text-2xl font-bold text-[#0f2940]">
            من الفكرة إلى النموذج الأولي في 4 أسابيع
          </h3>
          <p className="text-center text-sm sm:text-base text-gray-600 max-w-4xl mx-auto">
            نتبع منهجية عمل واضحة وسريعة تضمن تحويل فكرتك إلى واقع ملموس. يمكنك
            التفاعل مع كل مرحلة لمعرفة المزيد من التفاصيل حولها.
          </p>
        </div>

        {/* Desktop Layout - Hidden on mobile/tablet */}
        <div className="container mx-auto hidden lg:flex items-center justify-center gap-4 px-8">
          {/* Step 1 */}
          <div className="w-[260px] h-[170px] py-4 px-4 rounded-3xl bg-[#E9F4F9] flex flex-col justify-between gap-2">
            <div className="flex justify-start gap-3 items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0C1D36] text-lg font-bold shadow-sm">
                1
              </div>
              <h2 className="text-lg font-bold text-[#0C1D36]">استلام الفكرة</h2>
            </div>
            <p className="text-xs text-gray-600 leading-5">
              نستلم فكرتك ونقوم بتحليل متطلباتها وأهدافها الأولية
            </p>
          </div>

          {/* Arrow 1 → 2 */}
          <img src={arrowImg} alt="arrow" className="w-[100px]" />

          {/* Step 2 */}
          <div className="w-[260px] h-[170px] py-4 px-4 rounded-3xl bg-[#E9F4F9] flex flex-col justify-between gap-2 mt-[120px]">
            <div className="flex justify-start gap-3 items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0C1D36] text-lg font-bold shadow-sm">
                2
              </div>
              <h2 className="text-lg font-bold text-[#0C1D36]">التحليل والتخطيط</h2>
            </div>
            <p className="text-xs text-gray-600 leading-5">
              نستخدم أدوات الذكاء الاصطناعي لتحليل جدوى الفكرة وتحديد أفضل الحلول التقنية
            </p>
          </div>

          {/* Arrow 2 → 3 */}
          <img src={arrowImg} alt="arrow" className="w-[100px] routation-arrow2" />

          {/* Step 3 */}
          <div className="w-[260px] h-[180px] py-4 px-4 rounded-3xl bg-[#E9F4F9] flex flex-col justify-between gap-2">
            <div className="flex justify-start gap-3 items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0C1D36] text-lg font-bold shadow-sm">
                3
              </div>
              <h2 className="text-lg font-bold text-[#0C1D36]">التصميم والبناء</h2>
            </div>
            <p className="text-xs text-gray-600 leading-5">
              يقوم فريقنا بتطوير نموذج أولي عملي (Functional MVP) بواجهات مستخدم جذابة
            </p>
          </div>

          {/* Arrow 3 → 4 */}
          <img src={arrowImg} alt="arrow" className="w-[100px]" />

          {/* Step 4 */}
          <div className="w-[260px] h-[170px] py-4 px-4 rounded-3xl bg-[#E9F4F9] flex flex-col justify-between gap-2 mt-[120px]">
            <div className="flex justify-start gap-3 items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0C1D36] text-lg font-bold shadow-sm">
                4
              </div>
              <h2 className="text-lg font-bold text-[#0C1D36]">التسليم والإطلاق</h2>
            </div>
            <p className="text-xs text-gray-600 leading-5">
              نسلمك النموذج الأول جاهز للاختبار والعرض على المستثمرين خلال أقل من 30 يوماً
            </p>
          </div>
        </div>

        {/* Mobile/Tablet Layout - Hidden on desktop */}
        <div className="container mx-auto lg:hidden px-4 sm:px-6 space-y-6 sm:space-y-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full max-w-sm py-4 px-4 rounded-3xl bg-[#E9F4F9] flex flex-col justify-between gap-3">
              <div className="flex justify-start gap-3 items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0C1D36] text-lg font-bold shadow-sm">
                  1
                </div>
                <h2 className="text-base sm:text-lg font-bold text-[#0C1D36]">استلام الفكرة</h2>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-5">
                نستلم فكرتك ونقوم بتحليل متطلباتها وأهدافها الأولية
              </p>
            </div>
            <div className="w-6 h-6 rounded-full border-2 border-[#0C1D36] bg-white flex items-center justify-center">
              <div className="w-2 h-2 bg-[#0C1D36] rounded-full"></div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full max-w-sm py-4 px-4 rounded-3xl bg-[#E9F4F9] flex flex-col justify-between gap-3">
              <div className="flex justify-start gap-3 items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0C1D36] text-lg font-bold shadow-sm">
                  2
                </div>
                <h2 className="text-base sm:text-lg font-bold text-[#0C1D36]">التحليل والتخطيط</h2>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-5">
                نستخدم أدوات الذكاء الاصطناعي لتحليل جدوى الفكرة وتحديد أفضل الحلول التقنية
              </p>
            </div>
            <div className="w-6 h-6 rounded-full border-2 border-[#0C1D36] bg-white flex items-center justify-center">
              <div className="w-2 h-2 bg-[#0C1D36] rounded-full"></div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full max-w-sm py-4 px-4 rounded-3xl bg-[#E9F4F9] flex flex-col justify-between gap-3">
              <div className="flex justify-start gap-3 items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0C1D36] text-lg font-bold shadow-sm">
                  3
                </div>
                <h2 className="text-base sm:text-lg font-bold text-[#0C1D36]">التصميم والبناء</h2>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-5">
                يقوم فريقنا بتطوير نموذج أولي عملي (Functional MVP) بواجهات مستخدم جذابة
              </p>
            </div>
            <div className="w-6 h-6 rounded-full border-2 border-[#0C1D36] bg-white flex items-center justify-center">
              <div className="w-2 h-2 bg-[#0C1D36] rounded-full"></div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-sm py-4 px-4 rounded-3xl bg-[#E9F4F9] flex flex-col justify-between gap-3">
              <div className="flex justify-start gap-3 items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0C1D36] text-lg font-bold shadow-sm">
                  4
                </div>
                <h2 className="text-base sm:text-lg font-bold text-[#0C1D36]">التسليم والإطلاق</h2>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-5">
                نسلمك النموذج الأول جاهز للاختبار والعرض على المستثمرين خلال أقل من 30 يوماً
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="container mx-auto bg-white py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-12 gap-x-6 lg:gap-x-10 items-center">
            {/* Vision */}
            <div className="flex flex-col gap-3 sm:gap-4 text-right px-4 sm:px-6 order-2 lg:order-1">
              <h2 className="text-lg sm:text-xl font-bold text-[#0C1D36]">رؤيتنا</h2>
              <p className="text-gray-700 leading-5 sm:leading-6 text-xs sm:text-sm">
                "أن نكون الاستوديو الرائد في منطقة الشرق الأوسط وشمال أفريقيا في بناء وتنمية
                الشركات الناشئة القائمة على الذكاء الاصطناعي، من خلال تقديم حلول تقنية مبتكرة
                واستراتيجيات تطوير متكاملة ودعم ريادة الأعمال. نهدف إلى تمكين رواد الأعمال والمبتكرين
                من تحويل أفكارهم إلى مشاريع ناجحة، والمساهمة في خلق منظومة رقمية متطورة تعزز النمو
                الاقتصادي وتواكب تطورات المستقبل."
              </p>
            </div>

            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <img
                src={frameEye}
                alt="vision"
                className="w-full max-w-xs sm:max-w-sm lg:w-[90%] lg:max-w-[420px] h-auto object-contain block"
              />
            </div>

            {/* Mission */}
            <div className="flex justify-center lg:justify-start order-3">
              <img
                src={frameMicro}
                alt="mission"
                className="w-full max-w-xs sm:max-w-sm lg:w-[90%] lg:max-w-[420px] h-auto object-contain block"
              />
            </div>

            <div className="flex flex-col gap-3 sm:gap-4 text-right px-4 sm:px-6 order-4">
              <h2 className="text-lg sm:text-xl font-bold text-[#0C1D36]">رسالتنا</h2>
              <p className="text-gray-700 leading-5 sm:leading-6 text-xs sm:text-sm">
                "أن نكون الاستوديو الرائد في منطقة الشرق الأوسط وشمال أفريقيا في بناء وتنمية
                الشركات الناشئة القائمة على الذكاء الاصطناعي، من خلال تقديم حلول تقنية مبتكرة
                واستراتيجيات تطوير متكاملة ودعم ريادة الأعمال. نهدف إلى تمكين رواد الأعمال والمبتكرين
                من تحويل أفكارهم إلى مشاريع ناجحة، والمساهمة في خلق منظومة رقمية متطورة تعزز النمو
                الاقتصادي وتواكب تطورات المستقبل."
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
