import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";
export const FirstPage = () => {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState([]);
  const nextSlide = () => {
    setCurrent(current + 1);
  };
  const prevSlide = () => {
    setCurrent(current - 1);
  };

  useEffect(() => {
    const url = "https://dev.to/api/articles?top=1&per_page=10";
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetchin data: ", error);
      });
  }, []);
  return (
    <div className="overflow-hidden">
      <div
        className="hidden md:flex flex-col relative mt-[110px] h-[600px]  w-[1280px] duration-700  "
        style={{ marginLeft: current === 0 ? "0px" : `-${current * 1280}px` }}
      >
        <div className="flex h-full w-full z-30">
          {data.map((el, index) => (
            <div key={index} className="shrink-0 overflow-hidden   ">
              <Image
                src={el.cover_image ?? "/firstPage.png"}
                width={1280}
                height={600}
                objectFit="contain"
                className="w-[1280px] h-[600px]  z-10 rounded-[12px]"
              />
              <div className="w-[598px] h-[252px] bg-white z-30 ml-[11px] rounded-[12px] top-[335px] absolute  p-[40px]">
                <div className="w-[100%] flex flex-col h-[170px] justify-between ">
                  <div
                    style={{
                      backgroundColor: "#4B6BFB",
                      color: "#FFFFFF",
                    }}
                    className="px-2.5 py-1 w-[97px] rounded-[6px] font-medium text-sm"
                  >
                    {el.tag_list[0]}
                  </div>
                  <h3 className="text-4xl workSansText font-semibold">
                    {el.title}
                  </h3>
                  <p className="font-normal text-base workSansText text-gray-400">
                    August 20, 2022
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-[100%] justify-end flex gap-2 mt-3  text-gray-500 ">
        <button
          onClick={prevSlide}
          disabled={current === 0}
          className="w-[40px]   h-[40px] border-[1px]  rounded-[6px] flex items-center justify-center "
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={nextSlide}
          disabled={current === data.length - 1}
          className="w-[40px] h-[40px] border-[1px] rounded-[6px] flex items-center justify-center "
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};
