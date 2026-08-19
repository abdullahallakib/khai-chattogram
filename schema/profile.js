import * as Yup from "yup";

export const profileSchema = Yup.object({
  fullName: Yup.string()
    .required("পূর্ণ নাম আবশ্যক।")
    .min(3, "পূর্ণ নাম কমপক্ষে ৩ অক্ষরের হতে হবে।"),
  phoneNumber: Yup.string()
    .required("ফোন নম্বর আবশ্যক।")
    .min(10, "ফোন নম্বর কমপক্ষে ১০ অক্ষরের হতে হবে।"),
  email: Yup.string().required("ইমেইল আবশ্যক।").email("সঠিক ইমেইল ঠিকানা দিন।"),
  address: Yup.string().required("ঠিকানা আবশ্যক।"),
  job: Yup.string().required("পেশা আবশ্যক।"),
  bio: Yup.string().required("সংক্ষিপ্ত পরিচিতি আবশ্যক।"),
});
