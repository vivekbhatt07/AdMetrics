import React from "react";

const PrimaryContainer = ({ children, title, titleProps }) => {
  return (
    <div className="flex flex-col border border-[#ddd] rounded-sm">
      <div className="flex justify-between border-b border-[#ddd] p-4">
        <h3 className="capitalize">{title}</h3>
        <div className="flex">{titleProps}</div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PrimaryContainer;
