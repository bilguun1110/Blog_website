import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { Result } from "postcss";
export const Trending = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://dev.to/api/articles?top=1&per_page=10";
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="max-w-screen-xl ml-4  mt-[100px] overflow-x-scroll ">
      <div className="text-2xl workSansText  font-bold">Trending</div>
      <div className="w-fit flex justify-between mt-[30px] flex-col gap-4 md:flex-row  ">
        {data.map((el, index) => (
          <div className="relative w-[289px] h-[320px]" key={index}>
            <div className="absolute z-20 bottom-[50px]">
              <div
                style={{
                  backgroundColor: "#4B6BFB",
                  color: "#FFFFFF",
                }}
                className="px-2.5 py-1 w-[97px] rounded-[6px] ml-[28px] font-medium text-sm bottom-[120px]"
              >
                {el.tag_list[0]}
              </div>
              <p className="w-[230px] workSansText text-white font-semibold ml-[28px] text-lg h-[75px] z-20 bottom-[28px]  ">
                {el.title}
              </p>
            </div>

            <Image
              src={el.cover_image ?? "/Rectangle 38.png"}
              layout="fill"
              objectFit="cover"
              className="z-10 rounded-[10px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
