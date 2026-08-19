import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Customers = () => {
  function NextBtn({ onClick }) {
    return (
      <button
        className="absolute -bottom-12 left-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white"
        onClick={onClick}
      >
        <IoIosArrowForward />
      </button>
    );
  }

  function PrevBtn({ onClick }) {
    return (
      <button
        className="absolute -bottom-12 right-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white mr-2"
        onClick={onClick}
      >
        <IoIosArrowBack />
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto mb-20 mt-12">
      <Title addClass="text-[40px] text-center">আমাদের গ্রাহকদের মতামত</Title>
      <Slider {...settings}>
        <CustomerItem
          imgSrc="/images/client1.jpg"
          review="খাবারের স্বাদ অসাধারণ ছিল। সময়মতো ডেলিভারিও পেয়েছি।"
          name="ফাহিম আহমেদ"
          role="নিয়মিত গ্রাহক, আগ্রাবাদ"
        />
        <CustomerItem
          imgSrc="/images/client2.jpg"
          review="মেজবানটা একদম চাটগাঁর আসল স্বাদের মতো।"
          name="নুসরাত জাহান"
          role="নিয়মিত গ্রাহক, জিইসি"
        />
        <CustomerItem
          imgSrc="/images/client1.jpg"
          review="প্যাকেজিং ভালো ছিল এবং খাবার গরম অবস্থায় পেয়েছি।"
          name="তানভীর হাসান"
          role="নিয়মিত গ্রাহক, পাঁচলাইশ"
        />
        <CustomerItem
          imgSrc="/images/client2.jpg"
          review="বিরিয়ানিটা একদম পারফেক্ট ছিল, পরিবারের সবাই পছন্দ করেছে।"
          name="সাদিয়া ইসলাম"
          role="নিয়মিত গ্রাহক, খুলশী"
        />
      </Slider>
    </div>
  );
};

export default Customers;
