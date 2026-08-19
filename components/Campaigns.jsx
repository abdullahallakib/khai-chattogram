import Image from "next/image";
import Title from "./ui/Title";
import { MdShoppingCart } from "react-icons/md";

const CampaignItem = ({ img, title, highlight, sub }) => {
  return (
    <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4">
      <div className="relative md:w-44 md:h-44 w-36 h-36 after:content-['']   border-[5px] border-primary rounded-full overflow-hidden">
        <Image
          src={img}
          alt={title}
          layout="fill"
          className="hover:scale-105 transition-all"
          objectFit="cover"
          priority
        />
      </div>
      <div className="text-white">
        <Title addClass="text-2xl">{title}</Title>
        <div className="font-bengali my-1">
          <span className="text-[28px]">{highlight}</span>
          <span className="text-sm inline-block ml-1">{sub}</span>
        </div>
        <button className="btn-primary flex items-center gap-x-2">
          অর্ডার করুন <MdShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="flex justify-between container mx-auto py-20 gap-6 flex-wrap">
      <CampaignItem
        img="/images/o1.jpg"
        title="প্রথম অর্ডার অফার"
        highlight="৳৫০"
        sub="ছাড় প্রথম অর্ডারে"
      />
      <CampaignItem
        img="/images/o1.jpg"
        title="মেজবান স্পেশাল"
        highlight="২০%"
        sub="ছাড় মেজবানে"
      />
    </div>
  );
};

export default Campaigns;
