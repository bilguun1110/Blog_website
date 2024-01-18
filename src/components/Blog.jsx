// import Image from "next/image";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export const Blog = (props) => {
//   const { homecheck = true } = props;
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(homecheck ? 30 : 9);
//   const [loader, setLoader] = useState(true);
//   const clickHandler = () => {
//     setPage(page + 3);
//   };
//   useEffect(() => {
//     const url = `https://dev.to/api/articles?top=3&per_page=${page}`;
//     axios
//       .get(url)
//       .then((res) => {
//         setData(res.data);
//         setLoader(false);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         setLoader(false);
//       });
//   }, [page]);

//   return (
//     <div className="mt-[100px] max-w-screen-xl mx-auto">
//       <div className="ml-4 text-2xl workSansText  font-bold">All Blog post</div>
//       <div className="hidden md:flex justify-between mt-[32px]">
//         <div className="flex gap-5 text-xs workSansText  font-bold"></div>

//         <div className="text-xs workSansText  font-bold"></div>
//       </div>
//       <div className="ml-4 mt-[32px] grid grid-cols-1 md:grid-cols-3 gap-4 ">
//         {data.map((el, index) => (
//           <div
//             key={index}
//             className="workSansText flex w-[326px] md:w-[392px] h-[476px] flex-col gap-4 p-4 border-gray-200 border-solid border-[1px] rounded-[16px]"
//           >
//             <Image
//               src={el.cover_image ?? "/sum.png"}
//               width={340}
//               height={220}
//               className="w-[340px] h-[220px]  rounded-[6px]"
//             />
//             <div
//               style={{
//                 backgroundColor: "rgba(75, 107, 251, 0.05)",
//                 color: "#4B6BFB",
//               }}
//               className="px-2.5 py-1 w-[97px] h-[28px] rounded-[6px] ml-[8px] font-medium text-sm  "
//             >
//               {el.tag_list[0]}
//             </div>

//             <div className="text-2xl font-semibold">{el.title}</div>
//             <div className="font-normal text-base  text-gray-400">
//               {" "}
//               January 17, 2024
//             </div>
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={clickHandler}
//         className="hidden md:block md:w-[123px] h-[48px] border-[1px] border-solid  rounded-[6px] mt-[100px] ml-[600px] text-base font-semibold text-gray-500 workSansText mb-[100px]"
//       >
//         Load More
//       </button>
//     </div>
//   );
// };
