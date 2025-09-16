import heroImg from "../../assets/images/about-img.png";
import arrowImg from "../../assets/images/arrow.png";
import frameEye from "../../assets/images/frame-eye.png";
import frameMicro from "../../assets/images/frame-micro.png";

export default function About() {
  return (
    <main className="font-csans text-gray-800" dir="rtl">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        {/* Text */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
            التكنولوجيا في خدمتك... انقل عملك إلى مستوى جديد
          </h2>
          <p className="text-gray-600 leading-loose">
            باستخدام مجموعة من الاستراتيجيات الحديثة التي تشمل تقنيات الذكاء
            الاصطناعي وتحليل البيانات والتعلم الآلي، نقدم تصميم وتطوير أنظمة
            مبتكرة تمكن عملك من تحقيق أداء أفضل. فريقنا المتخصص جاهز لمساعدتك
            في بناء حلول مخصصة تلبي تطلعاتك وتضمن استمرارية عالية.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Team working"
            width={500}
            height={300}
            className="rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* Arrow + Title */}
      <img
        src={arrowImg}
        alt="arrow"
        width="120px"
        className="absolute end-1/18 bottom-1/4 routation"
      />
      <p className="absolute end-1/7">منهجيه العمل لدينا</p>

      {/* Steps Section */}
      <section className="mt-5 pt-5">
        <h3 className="text-center text-xl md:text-2xl font-bold text-[#0f2940]">
          من الفكرة إلى النموذج الأولي في 4 أسابيع
        </h3>
        <p className="text-center text-gray-600 leading-relaxed">
          نتبع منهجية عمل واضحة وسريعة تضمن تحويل فكرتك إلى واقع ملموس. يمكنك
          التفاعل مع كل مرحلة لمعرفة المزيد من التفاصيل حولها.
        </p>

        <div className="container mx-auto flex items-center justify-center gap-4 px-8">
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

        {/* Vision & Mission */}
        <div className="w-full bg-white pt-16">
          <div className="grid grid-cols-2 gap-y-12 gap-x-10 items-center">
            {/* Vision */}
            <div className="flex flex-col gap-4 text-right px-6">
              <h2 className="text-xl font-bold text-[#0C1D36]">رؤيتنا</h2>
              <p className="text-gray-700 leading-6 text-xs">
                "أن نكون الاستوديو الرائد في منطقة الشرق الأوسط وشمال أفريقيا في بناء وتنمية
                الشركات الناشئة القائمة على الذكاء الاصطناعي، من خلال تقديم حلول تقنية مبتكرة
                واستراتيجيات تطوير متكاملة ودعم ريادة الأعمال. نهدف إلى تمكين رواد الأعمال والمبتكرين
                من تحويل أفكارهم إلى مشاريع ناجحة، والمساهمة في خلق منظومة رقمية متطورة تعزز النمو
                الاقتصادي وتواكب تطورات المستقبل."
              </p>
            </div>

            <div className="flex justify-end">
              <img
                src={frameEye}
                alt="vision"
                className="w-[90%] max-w-[420px] h-auto object-contain block"
              />
            </div>

            {/* Mission */}
            <div className="flex justify-start">
              <img
                src={frameMicro}
                alt="mission"
                className="w-[90%] max-w-[420px] h-auto object-contain block"
              />
            </div>

            <div className="flex flex-col gap-4 text-right px-6">
              <h2 className="text-xl font-bold text-[#0C1D36]">رسالتنا</h2>
              <p className="text-gray-700 leading-6 text-xs">
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
