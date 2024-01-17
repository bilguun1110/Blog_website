import React from "react";

export const NotFound = () => {
  return (
    <div className="w-[642px] h-[208px] workSansText flex gap-[117px] mt-[100px] mb-[100px] mx-auto">
      <div className="text-7xl font-normal flex items-center divide-x-2 ">
        404
      </div>
      <div className="flex flex-col gap-[20px]">
        <h3 className="font-semibold text-2xl">Page Not Found</h3>
        <p className="text-lg font-normal text-gray-500">
          We're sorry, This page is unknown or does not exist the page you are
          looking for.
        </p>
        <button
          className="w-[130px] h-[40px] text-sm font-medium rounded-[6px] px-[10px] py-[10px] "
          style={{ backgroundColor: "#4B6BFB", color: "white" }}
        >
          Back To Home
        </button>
      </div>
    </div>
  );
};
