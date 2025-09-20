import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

export default function Login() {
  const navigate = useNavigate();
  const [apiMessage, setApiMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("البريد الإلكتروني غير صالح")
      .required("البريد الإلكتروني مطلوب"),
    password: yup.string().required("كلمة المرور مطلوبة"),
  });

  async function handleLogin(formValues) {
    setApiMessage("");
    setIsLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/login",
        formValues
      );
      console.log("res", res.data);
      setIsSuccess(true);
      setApiMessage("تم تسجيل الدخول بنجاح! جاري التحويل...");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error?.response?.data || error?.errors?.email?.[0]);
      setIsSuccess(false);
      setApiMessage(
        error.response?.data?.errors?.email?.[0] || "حدث خطأ أثناء تسجيل الدخول"
      );
    } finally {
      setIsLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#011F41] via-[#013366] to-[#022C5D] p-6">
      <div
        className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8"
        dir="rtl"
      >
        {apiMessage && (
          <div
            className={`p-4 mb-4 text-sm text-center rounded-lg border ${
              isSuccess
                ? "text-green-700 bg-green-100 border-green-300"
                : "text-red-700 bg-red-100 border-red-300"
            }`}
          >
            {apiMessage}
          </div>
        )}

        <h2 className="text-2xl font-bold text-center text-[#013366] mb-8">
          تسجيل الدخول
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
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
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                formik.errors.email && formik.touched.email
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
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                formik.errors.password && formik.touched.password
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

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center px-4 py-3 text-white bg-[#013366] hover:bg-[#011F41] focus:ring-4 focus:ring-[#022C5D] rounded-lg font-semibold transition-all duration-300 disabled:opacity-60"
          >
            {isLoading ? (
              <InfinitySpin
                visible={true}
                width="100"
                color="#fff"
                ariaLabel="infinity-spin-loading"
              />
            ) : (
              "تسجيل الدخول"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
