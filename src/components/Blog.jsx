import Image from "next/image";

export const Blog = () => {
  const cards = [
    {
      imgsrc: "/img1.png",
      major: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      imgsrc: "/img1.png",
      major: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      imgsrc: "/img1.png",
      major: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      imgsrc: "/img1.png",
      major: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      imgsrc: "/img1.png",
      major: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      imgsrc: "/img1.png",
      major: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      imgsrc: "/img1.png",
      major: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      imgsrc: "/img1.png",
      major: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      imgsrc: "/img1.png",
      major: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
  ];
  return (
    <div className="mt-[100px] max-w-screen-xl">
      <div className="ml-4 text-2xl workSansText  font-bold">All Blog post</div>
      <div className="hidden md:flex justify-between mt-[32px]">
        <div className="flex gap-5 text-xs workSansText  font-bold"></div>

        <div className="text-xs workSansText  font-bold"></div>
      </div>
      <div className="ml-4 mt-[32px] grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {cards.map(({ imgsrc, major, text, date }, index) => (
          <div
            key={index}
            className="workSansText flex w-[326px] md:w-[392px] h-[476px] flex-col gap-4 p-4 border-gray-200 border-solid border-[1px] rounded-[16px]"
          >
            <Image
              src={imgsrc}
              width={360}
              height={240}
              className="w-[360px] h-[240px]  rounded-[6px]"
            />
            <div
              style={{
                backgroundColor: "rgba(75, 107, 251, 0.05)",
                color: "#4B6BFB",
              }}
              className="px-2.5 py-1 w-[97px] h-[28px] rounded-[6px] ml-[8px] font-medium text-sm  "
            >
              {major}
            </div>

            <div className="text-2xl font-semibold">{text}</div>
            <div className="font-normal text-base  text-gray-400"> {date}</div>
          </div>
        ))}
      </div>
      <button className="hidden md:block md:w-[123px] h-[48px] border-[1px] border-solid  rounded-[6px] mt-[100px] ml-[600px] text-base font-semibold text-gray-500 workSansText mb-[100px]">
        Load More
      </button>
    </div>
  );
};
