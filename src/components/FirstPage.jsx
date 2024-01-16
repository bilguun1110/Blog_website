import React from "react";
import Image from "next/image";
import backgroundImage from "../../public/firstPage.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
export const FirstPage = () => {
  return (
    <div className="hidden md:flex flex-col">
      <div
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "600px",
          display: "flex",
          alignItems: "flex-end",
          zIndex: "10",
          marginTop: "110px",
          borderRadius: "10px",
        }}
      >
        <div className="w-[598px] h-[252px] bg-white z-20 ml-[11px] rounded-[12px] mb-[11px] p-[40px]">
          <div className="w-[100%] flex flex-col h-[170px] justify-between ">
            <div
              style={{
                backgroundColor: "#4B6BFB",
                color: "#FFFFFF",
              }}
              className="px-2.5 py-1 w-[97px] rounded-[6px] font-medium text-sm"
            >
              Technology
            </div>
            <h3 className="text-4xl font-semibold">
              Grid system for better Design User Interface
            </h3>
            <p className="font-normal text-base text-gray-400">
              August 20, 2022
            </p>
          </div>
        </div>
      </div>
      <div className="w-[100%]  flex justify-end gap-2 mt-3 text-gray-500 ">
        <div className="w-[40px]  h-[40px] border-[1px] border-solid border-gray-500 rounded-[6px] flex items-center justify-center ">
          <IoIosArrowBack />
        </div>
        <div className="w-[40px] h-[40px] border-[1px] border-solid border-gray-500 rounded-[6px] flex items-center justify-center ">
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};
