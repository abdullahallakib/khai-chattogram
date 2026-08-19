import Image from "next/image";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="bg-secondary py-14">
      <div className="container mx-auto flex items-center text-white gap-20 justify-center flex-wrap-reverse">
        <div className="flex justify-center">
          <div className="relative sm:w-[445px] sm:h-[400px]  flex justify-center w-[300px] h-[350px]">
            <Image src="/images/about-img.png" alt="খাই চাটগাঁ" layout="fill" />
          </div>
        </div>
        <div className="md:w-1/2 ">
          <Title addClass="text-[40px]">আমরা খাই চাটগাঁ</Title>
          <p className="my-5 flex flex-col items-center">
            চট্টগ্রামের ঐতিহ্যবাহী মেজবান, কালাভুনা, বিরিয়ানি থেকে শুরু করে
            তাজা সামুদ্রিক খাবার পর্যন্ত, আমরা শহরের সেরা রেস্টুরেন্টগুলোর
            জনপ্রিয় খাবার পৌঁছে দিচ্ছি আপনার ঘরে। আগ্রাবাদ, জিইসি, খুলশী,
            পাঁচলাইশ সহ পুরো চট্টগ্রাম জুড়ে দ্রুত ও নির্ভরযোগ্য ডেলিভারি সেবা
            নিয়ে আমরা আছি আপনার পাশে।
          </p>
          <button className="btn-primary">আরও পড়ুন</button>
        </div>
      </div>
    </div>
  );
};

export default About;
