import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().required("ইমেইল আবশ্যক।").email("সঠিক ইমেইল ঠিকানা দিন।"),
  password: Yup.string()
    .required("পাসওয়ার্ড আবশ্যক।")
    .min(8, "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/,
      "পাসওয়ার্ডে কমপক্ষে একটি বড় হাতের অক্ষর, একটি ছোট হাতের অক্ষর, একটি সংখ্যা ও একটি বিশেষ চিহ্ন থাকতে হবে।"
    ),
});
