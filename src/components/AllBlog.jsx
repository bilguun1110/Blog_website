import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";

export const AllBlog = (props) => {
  const { homeCheck = true } = props;
  const [data, setData] = useState([]);

  const [page, setPage] = useState(homeCheck ? 9 : 30);
  const [loader, setLoader] = useState(true);
  const clickHandler = () => {
    setPage(page + 3);
  };
  useEffect(() => {
    const url = `https://dev.to/api/articles?top=3&per_page=${page}`;
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoader(false);
      });
  }, [page]);

  const types = [
    "All",
    "Design",
    "Travel",
    "Fashion",
    "Technology",
    "Branding",
  ];
  function MouseOver(event) {
    event.target.style.color = "#D4A373";
  }
  function MouseOut(event) {
    event.target.style.color = "";
  }

  return (
    <div className="mt-[100px] max-w-screen-xl">
      <div className="ml-4 text-2xl workSansText  font-bold">All Blog post</div>
      <div className="hidden md:flex justify-between mt-[32px]">
        <div className="flex gap-5 text-xs workSansText  font-bold">
          {types.map((type, index) => (
            <div
              className=""
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
              key={index}
            >
              {type}
            </div>
          ))}
        </div>

        <div className="text-xs workSansText  font-bold">View all</div>
      </div>
      <div className="ml-4 mt-[32px] grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {data.map((el, index) => (
          <div
            key={index}
            className="workSansText relative flex w-[326px] md:w-[392px] h-[476px] flex-col gap-4 p-4 border-gray-200 border-solid border-[1px] rounded-[16px]"
          >
            <Image
              src={el.cover_image ?? "/Rectangle 39.png"}
              width={340}
              height={220}
              className="w-[340px] h-[220px] rounded-[10px]"
            />
            <div className="z-20 flex flex-col gap-4">
              <div
                style={{
                  backgroundColor: "rgba(75, 107, 251, 0.05)",
                  color: "#4B6BFB",
                }}
                className="px-2.5 py-1 w-[97px] h-[28px] rounded-[6px] ml-[8px] font-medium text-sm  "
              >
                {el.tag_list[0]}
              </div>

              <div className="text-2xl font-semibold h-[84px]">{el.title}</div>
              <div className="font-normal text-base  text-gray-400">
                {" "}
                January 17, 2024{" "}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={clickHandler}
        className="hidden md:block md:w-[123px] h-[48px] border-[1px] border-solid  rounded-[6px] mt-[100px] ml-[600px] text-base font-semibold text-gray-500 workSansText mb-[100px]"
      >
        Load More
      </button>
    </div>
  );
};
