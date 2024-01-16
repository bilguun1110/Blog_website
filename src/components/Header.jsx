import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";

export const Header = ({ children }) => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const routes = ["Home", "Blog", "Contact"];
  const handleMenuClick = () => {
    setIsMenuClicked((previousState) => !previousState);
  };
  return (
    <div className="max-w-screen-xl mx-auto  flex flex-col ">
      <div className="flex flex-row justify-around md:justify-between sticky top-0 z-40">
        <Image
          src="/meta.png"
          width={158}
          height={36}
          className="w-[158px] h-[36px]"
        />
        <div className="hidden  md:flex  ">
          <div className="workSansText flex w-[667px] items-center justify-center gap-[40px] font-normal text-base text-gray-600">
            {routes.map((route, index) => (
              <p key={index}>{route} </p>
            ))}
          </div>
          <div className="flex w-[166px] h-[36px] bg-gray-200 pl-[16px] py-[8px] pr-2 rounded-[5px]">
            <input
              className=" w-[114px] bg-gray-200 h-[20px] "
              placeholder="Search "
            ></input>
            <IoIosSearch width={16} height={16} className="w-[18px] h-[18px]" />
          </div>
        </div>
        <button onClick={handleMenuClick} className="block md:hidden">
          {isMenuClicked ? <MdClose /> : <MdOutlineMenu size={24} />}
        </button>
      </div>
      {isMenuClicked && (
        <motion.div
          initial={{ x: "-100%", scale: 0 }}
          animate={{ x: "5px", scale: 1 }}
          exit={{ x: "-100%", scale: 0 }}
          transition={{
            type: "",
            duration: 0.4,
          }}
          className="flex flex-col mt-[30px] mx-auto ml-[40px]  "
        >
          <div className="flex flex-col w-[100px] items-start   gap-[20px] font-normal text-base text-gray-600">
            {routes.map((route, index) => (
              <p key={index}>{route} </p>
            ))}
          </div>
          <div className="flex w-[166px] h-[36px]  mt-[20px] bg-gray-200 pl-[16px] py-[8px] pr-2 rounded-[5px]">
            <input
              className=" w-[114px] bg-gray-200 h-[20px] "
              placeholder="Search "
            ></input>
            <IoIosSearch width={16} height={16} className="w-[18px] h-[18px]" />
          </div>
        </motion.div>
      )}
      {children}
      <Footer />
    </div>
  );
};
