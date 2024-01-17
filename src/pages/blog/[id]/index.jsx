import React from "react";

const BlogDetailPage = () => {
  return (
    <div className="w-[800px] mx-auto">
      <h2 className="text-4xl workSansText font-semibold">
        The Impact of Technology on the Workplace: How Technology is Changing
      </h2>
      <div className="flex workSansText gap-6 mt-4">
        <div className="flex text-sm font-medium text-gray-500 items-center">
          <BiSolidUserCircle
            width={28}
            height={28}
            className="w-[28px] h-[28px]"
          />
          <p>Tracey Wilson</p>
        </div>

        <p className="text-sm font-normal flex text-gray-500 items-center">
          August 20, 2022
        </p>
      </div>
      <Image
        src="/sum.png"
        width={800}
        height={462}
        className="w-[100%] mt-[36px]"
      />
      <div className="flex flex-col gap-8 mt-[32px] font-normal text-xl serifText text-gray-600">
        <p>
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels.
        </p>
        <p>
          {" "}
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>
      </div>
      <p className="mt-[32px] text-2xl font-semibold serifText">
        Research Your Destination
      </p>
      <div className="gap-8 flex flex-col mt-4 font-normal text-xl serifText text-gray-600">
        <p>
          Before embarking on your journey, take the time to research your
          destination. This includes understanding the local culture, customs,
          and laws, as well as identifying top attractions, restaurants, and
          accommodations. Doing so will help you navigate your destination with
          confidence and avoid any cultural faux pas.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In
          hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum
          faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod
          elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing
          at in tellus.
        </p>
      </div>
      <p className="mt-[32px] text-2xl font-semibold serifText">
        Plan Your Itinerary
      </p>
      <div className="gap-8 flex flex-col mt-4 mb-[80px] font-normal text-xl serifText text-gray-600">
        <p>
          While it's essential to leave room for spontaneity and unexpected
          adventures, having a rough itinerary can help you make the most of
          your time and budget. Identify the must-see sights and experiences and
          prioritize them according to your interests and preferences. This will
          help you avoid overscheduling and ensure that you have time to relax
          and enjoy your journey.
        </p>
        <p>
          Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis
          lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget
          felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
        </p>
      </div>
    </div>
  );
};

export default BlogDetailPage;
