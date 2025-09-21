import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

export default function Register() {
  let navigate = useNavigate();
  const [apiMsg, setApiMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  let validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[\u0600-\u06FFa-zA-Z\s]+$/, "الاسم يجب أن يحتوي على حروف فقط")
      .min(3, "الاسم يجب ألا يقل عن 3 حروف")
      .max(20, "الاسم يجب ألا يزيد عن 20 حرف")
      .required("الاسم مطلوب"),

    email: yup
      .string()
      .email("البريد الإلكتروني غير صالح")
      .required("البريد الإلكتروني مطلوب"),

    password: yup
      .string()
      .min(8, "كلمة المرور يجب ألا تقل عن 8 أحرف")
      .max(20, "كلمة المرور يجب ألا تزيد عن 20 حرف")
      .matches(/[A-Z]/, "كلمة المرور يجب أن تحتوي على حرف كبير واحد على الأقل")
      .matches(/[a-z]/, "كلمة المرور يجب أن تحتوي على حرف صغير واحد على الأقل")
      .matches(/[0-9]/, "كلمة المرور يجب أن تحتوي على رقم واحد على الأقل")
      .matches(
        /[@$!%*?&]/,
        "كلمة المرور يجب أن تحتوي على رمز خاص واحد على الأقل"
      )
      .required("كلمة المرور مطلوبة"),

    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password")], "كلمة المرور وتأكيدها غير متطابقين")
      .required("تأكيد كلمة المرور مطلوب"),
  });


 async function handleregister(formValues) {
  setApiMsg("");
  setIsLoading(true);

  // async function handleregister(formValues) {
  //   setApiMsg("");
  //   setIsLoading(true);
  //   await axios
  //     .post("http://localhost:8000/api/v1/register", formValues)
  //     .then((res) => {
  //       console.log("res", res.data);
  //       setIsSuccess(true);
  //       setApiMsg("تم تسجيل الدخول بنجاح! جاري التحويل...");
  //       setTimeout(() => {
  //         navigate("/Login");
  //       }, 2000);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data.errors.email[0]);
  //       setApiMsg(
  //         error.response?.data?.errors.email[0] || "حدث خطأ أثناء تسجيل الدخول"
  //       );
  //       setIsLoading(false);
  //     });


  try {
    const res = await axios.post("http://localhost:8000/api/v1/register", formValues);

    console.log("res", res.data);
    setIsSuccess(true);
    setApiMsg("تم إنشاء الحساب بنجاح! جاري التحويل...");
    setTimeout(() => {
      navigate("/Login");
    }, 2000);
  } catch (error) {
    console.log("error", error.response?.data);

    const errorMsg =
      error.response?.data?.errors?.email?.[0] ||
      error.response?.data?.errors?.password?.[0] ||
      error.response?.data?.message ||
      "حدث خطأ أثناء تسجيل الحساب";

    setIsSuccess(false);
    setApiMsg(errorMsg);
  } finally {
    setIsLoading(false);
  }
}
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
       phone: "",
    },
    validationSchema,
    onSubmit: handleregister,
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#011F41] via-[#013366] to-[#022C5D] p-6">
      <div
        className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8"
        dir="rtl"
      >
        {apiMsg && (
          <div
            className={`p-4 mb-4 text-sm text-center rounded-lg border ${isSuccess
                ? "text-green-700 bg-green-100 border-green-300"
                : "text-red-700 bg-red-100 border-red-300"
              }`}
          >
            {apiMsg}
          </div>
        )}

        <h2 className="text-2xl font-bold text-center text-[#013366] mb-8">
          ✨ إنشاء حساب جديد
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              الاسم
            </label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${formik.errors.name && formik.touched.name
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-[#013366]"
                }`}
              placeholder="أدخل اسمك"
            />
            {formik.errors.name && formik.touched.name && (
              <p className="mt-2 text-sm text-red-600">{formik.errors.name}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${formik.errors.email && formik.touched.email
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-[#013366]"
                }`}
              placeholder="example@mail.com"
            />
            {formik.errors.email && formik.touched.email && (
              <p className="mt-2 text-sm text-red-600">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              كلمة المرور
            </label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${formik.errors.password && formik.touched.password
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-[#013366]"
                }`}
              placeholder="********"
            />
            {formik.errors.password && formik.touched.password && (
              <p className="mt-2 text-sm text-red-600">
                {formik.errors.password}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              تأكيد كلمة المرور
            </label>
            <input
              type="password"
              name="password_confirmation"
              value={formik.values.password_confirmation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${formik.errors.password_confirmation &&
                  formik.touched.password_confirmation
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-[#013366]"
                }`}
              placeholder="********"
            />
            {formik.errors.password_confirmation &&
              formik.touched.password_confirmation && (
                <p className="mt-2 text-sm text-red-600">
                  {formik.errors.password_confirmation}
                </p>
              )}
          </div>
          <div>
  <label className="block mb-2 text-sm font-medium text-gray-700">
    رقم الهاتف 
  </label>
  <input
    type="text"
    name="phone"
    value={formik.values.phone}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 border-gray-300 focus:ring-[#013366]"
    placeholder="أدخل رقم الهاتف "
  />
</div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center px-4 py-3 text-white bg-[#013366] hover:bg-[#011F41] focus:ring-4 focus:ring-[#022C5D] rounded-lg font-semibold transition-all duration-300 disabled:opacity-60"
          >
            {isLoading ? (
              <ClipLoader
                color="#fff"
                loading={true}
                size={20}
                aria-label="Loading Spinner"
              />
            ) : (
              "إنشاء الحساب"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
