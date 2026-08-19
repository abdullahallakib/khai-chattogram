import * as Yup from "yup";

export const newPasswordSchema = Yup.object({
  password: Yup.string()
    .required("পাসওয়ার্ড আবশ্যক।")
    .min(8, "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{6,}$/,
      "পাসওয়ার্ডে কমপক্ষে একটি বড় হাতের অক্ষর, একটি ছোট হাতের অক্ষর, একটি সংখ্যা ও একটি বিশেষ চিহ্ন থাকতে হবে।"
    ),
  confirmPassword: Yup.string()
    .required("পাসওয়ার্ড নিশ্চিত করুন।")
    .oneOf([Yup.ref("password"), null], "পাসওয়ার্ড মিলছে না।"),
});
