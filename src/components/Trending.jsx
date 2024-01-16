import React from "react";
import Image from "next/image";
export const Trending = () => {
  const contens = [
    {
      imgsrc: "/Rectangle 38.png",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      imgsrc: "/Rectangle 39.png",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      imgsrc: "/Rectangle 40.png",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      imgsrc: "/Rectangle 41.png",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
  ];
  return (
    <div className="max-w-screen-xl ml-4  mt-[100px] ">
      <div className="text-2xl workSansText  font-bold">Trending</div>
      <div className="flex justify-between mt-[30px]  flex-col gap-4 md:flex-row">
        {contens.map(({ imgsrc, text }, index) => (
          <div className="relative " key={index}>
            <div
              style={{
                backgroundColor: "#4B6BFB",
                color: "#FFFFFF",
              }}
              className="px-2.5 py-1 w-[97px] rounded-[6px] ml-[28px] font-medium text-sm absolute bottom-[120px]"
            >
              Technology
            </div>
            <p className="absolute w-[230px] workSansText text-white font-semibold ml-[28px] text-lg h-[75px] z-20 bottom-[28px]  ">
              {text}
            </p>
            <Image
              src={imgsrc}
              width={289}
              height={320}
              className="w-[289px] h-[320px] z-10"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
