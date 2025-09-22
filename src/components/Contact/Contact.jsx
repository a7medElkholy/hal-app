import React, { useContext } from "react";
import contact from "../../assets/images/contact.png";
import { Link } from "react-router-dom";
import bottomDots from "../../assets/images/bottom-dots2.png";
import topDots from "../../assets/images/top-dots.png";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContextObj } from "../../Context/AuthContextProvider";
import Swal from "sweetalert2";

export default function Contact() {
  const { userToken } = useContext(AuthContextObj);

  let contactSchema = yup.object().shape({
    name: yup
      .string()
      .required("الاسم مطلوب")
      .max(255, "الاسم يجب ألا يتجاوز 255 حرف"),

    field: yup.string().nullable().max(255, "الحقل يجب ألا يتجاوز 255 حرف"),

    capacity: yup
      .number()
      .typeError("عدد المستخدمين يجب أن يكون رقم")
      .nullable()
      .integer("يجب أن يكون رقمًا صحيحًا")
      .min(1, "عدد المستخدمين يجب أن يكون 1 على الأقل"),

    cost: yup
      .number()
      .typeError("التكلفة يجب أن تكون رقم")
      .nullable()
      .min(0, "التكلفة يجب أن تكون أكبر من أو تساوي 0"),
    description: yup.string().nullable(),
  });
  let user = {
    name: "",
    field: "",
    capacity: undefined,
    cost: undefined,
    description: "",
    user_id: localStorage.getItem("userId") || null,
  };

  function submitData(values) {
    if (!userToken) {
      Swal.fire({
        icon: "error",
        text: "من فضلك قم بتسجيل الدخول أولاً",
        confirmButtonText: "موافق",
      });
      return;
    }

    console.log(values);
    axios
      .post("http://localhost:8000/api/v1/ideas", values, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        console.log("res", res);
        toast.success("تم إنشاء الفكرة بنجاح", {
          duration: 2000,
          position: "top-center",
        });
      })
      .catch((error) => {
        console.log("error", error);
        toast.error("لم يتم إنشاء الفكرة بنجاح", {
          duration: 2000,
          position: "top-center",
        });
      });
  }

  const contactFormik = useFormik({
    initialValues: user,
    onSubmit: submitData,
    validationSchema: contactSchema,
  });
  return (
    <div>
      <div className="py-16 bg-[#F6FBFD] relative">
        <div className="max-w-7xl mx-auto px-6 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6  p-8  text-right">
              <form
                className="flex flex-col"
                onSubmit={contactFormik.handleSubmit}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="field"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      <i className="fa-solid mr-1 fa-star-of-life text-[5px] "></i>
                      اختيار الخدمة
                    </label>
                    <input
                      onChange={contactFormik.handleChange}
                      onBlur={contactFormik.handleBlur}
                      value={contactFormik.values.field}
                      type="text"
                      id="field"
                      name="field"
                      className="bg-gray-50 border text-right border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="تكنولوجيا"
                    />
                    {contactFormik.errors.field &&
                    contactFormik.touched.field ? (
                      <div
                        className="p-4 mb-4 mt-2 rounded-full text-sm text-red-800  bg-red-50 dark:bg-gray-800 dark:text-red-400"
                        role="alert"
                      >
                        {" "}
                        {contactFormik.errors.field}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      <i className="fa-solid mr-1 fa-star-of-life text-[5px] "></i>
                      الاسم
                    </label>
                    <input
                      onChange={contactFormik.handleChange}
                      onBlur={contactFormik.handleBlur}
                      value={contactFormik.values.name}
                      type="text"
                      id="name"
                      name="name"
                      className="bg-gray-50 border text-right border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="اسم المشروع"
                      required
                    />{" "}
                    {contactFormik.errors.name && contactFormik.touched.name ? (
                      <div
                        className="p-4 mb-4 mt-2 rounded-full  text-sm text-red-800  bg-red-50 dark:bg-gray-800 dark:text-red-400"
                        role="alert"
                      >
                        {contactFormik.errors.name}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                  <div>
                    <label
                      htmlFor="capacity"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      <i className="fa-solid mr-1 fa-star-of-life text-[5px] "></i>
                      عدد المستخدمين{" "}
                    </label>
                    <input
                      onChange={contactFormik.handleChange}
                      onBlur={contactFormik.handleBlur}
                      value={contactFormik.values.capacity}
                      type="number"
                      id="capacity"
                      name="capacity"
                      className="bg-gray-50 border text-right border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="ادخل عدد المستخدمين"
                    />
                    {contactFormik.errors.capacity &&
                    contactFormik.touched.capacity ? (
                      <div
                        className="p-4 mb-4 mt-2 rounded-full text-sm text-red-800  bg-red-50 dark:bg-gray-800 dark:text-red-400"
                        role="alert"
                      >
                        {" "}
                        {contactFormik.errors.capacity}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="cost"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      <i className="fa-solid mr-1 fa-star-of-life text-[5px] "></i>
                      التكلفة{" "}
                    </label>
                    <input
                      onChange={contactFormik.handleChange}
                      onBlur={contactFormik.handleBlur}
                      value={contactFormik.values.cost}
                      type="number"
                      id="cost"
                      name="cost"
                      className="bg-gray-50 border text-right border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="تكلفة المشروع"
                    />
                    {contactFormik.errors.cost && contactFormik.touched.cost ? (
                      <div
                        className="p-4 mb-4 mt-2 rounded-full text-sm text-red-800  bg-red-50 dark:bg-gray-800 dark:text-red-400"
                        role="alert"
                      >
                        {" "}
                        {contactFormik.errors.cost}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    <i className="fa-solid mr-1 fa-star-of-life text-[5px] "></i>
                    وصف المشروع{" "}
                  </label>
                  <textarea
                    value={contactFormik.values.description}
                    onChange={contactFormik.handleChange}
                    onBlur={contactFormik.handleBlur}
                    name="description"
                    id="description"
                    rows="4"
                    className="bg-gray-50 border text-right border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3 resize-none"
                    placeholder="وصف المشروع "
                  ></textarea>
                  {contactFormik.errors.description &&
                  contactFormik.touched.description ? (
                    <div
                      className="p-4 mb-4 mt-2 rounded-full text-sm text-red-800  bg-red-50 dark:bg-gray-800 dark:text-red-400"
                      role="alert"
                    >
                      {" "}
                      {contactFormik.errors.description}
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="flex items-center justify-center w-full mt-6">
                  <button
                    type="submit"
                    className="btn text-center w-full flex items-center justify-center gap-2"
                  >
                    <span className="w-8 h-8 flex items-center justify-center bg-main2 rounded-full main-text">
                      <i className="fa-solid fa-arrow-left text-[#013366]"></i>
                    </span>
                    <span className="main-text">تواصل معنا</span>
                  </button>
                </div>
              </form>
            </div>

            <button
              type="submit"
              className="lg:col-span-6 flex flex-col items-center lg:items-end text-center lg:text-right gap-8"
            >
              <div>
                <span className="block text-lg font-semibold mb-2">
                  &lt;تواصل معنا&gt;
                </span>
                <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                  تواصل معانا لاكتشاف حلول{" "}
                  <span className="block">تقنية مبتكرة لعملك</span>
                </h2>
              </div>

              <div className="img-contact w-full max-w-md">
                <img
                  src={contact}
                  alt="contact"
                  className="w-full h-auto object-contain"
                />
              </div>
            </button>
          </div>
        </div>
        <div className="absolute flex  bottom-0 right-0 w-full lg:w-[45%] pointer-events-none">
          <img src={bottomDots} alt="dots" />
        </div>
        <div className="absolute top-0 left-0 w-full lg:w-[45%] pointer-events-none">
          <img src={topDots} alt="dots" />
        </div>
      </div>
    </div>
  );
}
