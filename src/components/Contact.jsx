import React from "react";

export const Contact = () => {
  return (
    <div className="w-[895px] h-[895px] mb-[100px] workSansText  mx-auto">
      <div className="w-[765px] px-[14px] py-[49px]">
        <div className="w-[624px] ">
          <h3 className="text-4xl font-semibold">Contact Us</h3>
          <p className="font-normal text-base mt-[20px] text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="w-[638px] flex  justify-between mt-[20px]">
          <div className="w-[294px] h-[133px] border-[1px] rounded-[12px] border-solid border-gray-400 p-[16px]">
            <h4 className="text-2xl font-semibold">Address</h4>
            <p className="font-normal text-lg text-gray-500 mt-[10px]">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </div>
          <div className="w-[294px] h-[133px] border-[1px] rounded-[12px] border-solid border-gray-400  p-[16px]">
            <h4 className="text-2xl font-semibold">Contact</h4>
            <p className="font-normal text-lg text-gray-500 mt-[10px]">
              313-332-8662 info@email.com
            </p>
          </div>
        </div>
      </div>
      <div className="w-[643px] rounded-[10px] bg-gray-100 py-[28px] pl-[32px]">
        <div className="w-[478px] h-[335px] flex flex-col gap-5">
          <div className="font-semibold text-lg">Leave a Message</div>
          <div className="flex flex-row  w-[475px] justify-between">
            <input
              width={225}
              height={38}
              placeholder="Your Name"
              className="w-[225px] h-[38px] border-[1px] border-solid border-gray-300 rounded-[5px] p-[14px]"
            />
            <input
              width={225}
              height={38}
              placeholder="Your Email"
              className="w-[225px] h-[38px] border-[1px] border-solid border-gray-300 rounded-[5px] p-[14px]"
            />
          </div>
          <input
            width={475}
            height={35}
            placeholder="Subject"
            className="w-[475px] h-[35px] border-[1px] border-solid border-gray-300 rounded-[5px] p-[14px]"
          />
          <input
            width={475}
            height={135}
            placeholder="Write a message"
            className="w-[475px] h-[135px] border-[1px] border-solid border-gray-300 rounded-[5px] p-[14px]"
          />
          <button
            className="w-[130px] h-[40px] text-sm font-medium rounded-[6px] px-[10px] py-[10px] "
            style={{ backgroundColor: "#4B6BFB", color: "white" }}
          >
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};
