import Image from "next/image";
import Title from "./ui/Title";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 30000,
    appenDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
    ),
  };

  return (
    <div className="h-screen w-full container mx-auto -mt-[88px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image
            src="/images/hero-bg.png"
            alt="চাটগাঁর সুস্বাদু খাবার"
            layout="fill"
            priority
            objectFit="cover"
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="mt-48  text-white flex flex-col items-start gap-y-10">
            <Title
              serif
              addClass="text-4xl md:text-5xl lg:text-6xl leading-tight max-w-2xl"
            >
              চাটগাঁর পছন্দের খাবার, এখন আপনার হাতের মুঠোয়
            </Title>
            <p className="text-sm sm:text-base sm:w-2/5 w-full leading-relaxed">
              আপনার কাছের রেস্টুরেন্ট থেকে পছন্দের খাবার অর্ডার করুন। মেজবান
              থেকে বিরিয়ানি, সবই এক জায়গায়।
            </p>
            <button className="btn-primary">এখনই অর্ডার করুন</button>
          </div>
        </div>
        <div>
          <div className="relative text-white top-48 flex flex-col items-start gap-y-10">
            <Title serif addClass="text-4xl md:text-5xl lg:text-6xl leading-tight">
              খাই চাটগাঁ
            </Title>
            <p className="text-sm sm:text-base sm:w-2/5 w-full leading-relaxed">
              চাটগাঁর স্বাদ, এখন আপনার ঘরে। মেজবান, কালাভুনা, বিরিয়ানি থেকে
              শুরু করে সব ধরনের প্রিয় খাবার পৌঁছে যাবে আপনার দরজায়।
            </p>
            <button className="btn-primary">এখনই অর্ডার করুন</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
