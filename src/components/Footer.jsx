import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="md:w-[100%] h-[495px] pt-[64px] bg-gray-50 md:px-[300px] md:py-[64px] ">
      <div className="md:w-[1215px] md:h-[236px] flex flex-col items-center md:items-start  md:flex-row gap-8 ">
        <div className="hidden md:block md:w-[280px] workSansText  ">
          <div className="font-semibold text-lg">About</div>
          <div className="font-normal text-base mt-[12px] text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </div>
          <div className="font-normal text-base mt-[24px] text-gray-600">
            Email : info@jstemplate.net
          </div>
          <div className="font-normal text-base text-gray-600">
            Phone : 880 123 456 789
          </div>
        </div>
        <div className="font-normal text-base workSansText flex flex-col gap-2 items-center  text-gray-600 w-[62px] md:w-[521px]">
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="text-gray-500 flex gap-6 ">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
      <div
        className="w-[100%]  h-[95px] mt-[25px] py-[32px] workSansText justify-between flex"
        style={{ borderTop: "1px solid #E8E8EA" }}
      >
        <div className="flex gap-3 ">
          <Image
            src="/B.png"
            width={48}
            height={48}
            className="w-[48px] h-[48px] ml-[50px] md:ml-0"
          />
          <div className="">
            <div className="flex ">
              <p className="text-xl font-normal">Meta</p>
              <p className="text-xl font-extrabold">Blog</p>
            </div>
            <p className="text-base font-normal">© All Rights Reserved.</p>
          </div>
        </div>
        <div className="hidden md:flex gap-4 text-base font-normal text-gray-600 divide-x-2">
          <p className="divide-x-2">Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};
