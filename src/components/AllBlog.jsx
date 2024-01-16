import React from "react";

export const AllBlog = () => {
  const Types = [
    "All",
    "Design",
    "Travel",
    "Fashion",
    "Technology",
    "Branding",
  ];
  return (
    <div>
      <div>All Blog post</div>
      <div>
        {Types.map((type, index) => {
          <p key={index}>{type}</p>;
        })}
        <p>View All</p>
      </div>
    </div>
  );
};
