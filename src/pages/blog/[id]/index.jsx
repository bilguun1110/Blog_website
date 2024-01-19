import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import Image from "next/image";

const BlogDetailPage = ({ data }) => {
  console.log(data);
  return (
    <div className="w-[800px] mx-auto">
      <div className="">
        <h2 className="text-4xl workSansText font-semibold">{data.title}</h2>
        <div className="flex workSansText gap-6 mt-4">
          <div className="flex text-sm font-medium text-gray-500 items-center">
            <BiSolidUserCircle
              width={28}
              height={28}
              className="w-[28px] h-[28px]"
            />
            <p>{data.user.name}</p>
          </div>

          <p className="text-sm font-normal flex text-gray-500 items-center">
            {data.readable_publish_date}
          </p>
        </div>
        <Image
          src={data.cover_image}
          width={800}
          height={462}
          className="w-[100%] mt-[36px]"
        />
        <div className="flex flex-col gap-8 mt-[32px] font-normal text-xl serifText text-gray-600">
          {data.description}
        </div>

        <div className="gap-8 flex flex-col mt-4 mb-[80px] font-normal text-xl serifText text-gray-600">
          <p>
            While it's essential to leave room for spontaneity and unexpected
            adventures, having a rough itinerary can help you make the most of
            your time and budget. Identify the must-see sights and experiences
            and prioritize them according to your interests and preferences.
            This will help you avoid overscheduling and ensure that you have
            time to relax and enjoy your journey.
          </p>
          <p>
            Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis
            lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget
            felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;

export const getServerSideProps = async (context) => {
  const blogId = context.params.id;
  const response = await fetch(`https://dev.to/api/articles/${blogId}`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};
