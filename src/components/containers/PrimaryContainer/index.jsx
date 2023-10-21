import React from "react";

const PrimaryContainer = ({
  children,
  title,
  titleProps,
  style,
  bodyStyle,
  bodyClass,
  headStyle,
}) => {
  return (
    <div
      className={`flex flex-col border border-[#ddd] rounded-md bg-[#fff]`}
      style={{ ...style }}
    >
      <div
        className={`flex justify-between border-[#ddd] p-4 pt-3 ${
          headStyle ? headStyle : "border-b"
        }`}
      >
        <h3 className="capitalize font-medium text-[#333d47]">{title}</h3>
        <div className="flex">{titleProps}</div>
      </div>
      <div style={{ ...bodyStyle }} className={`${bodyClass}`}>
        {children}
      </div>
    </div>
  );
};

export default PrimaryContainer;

// #dddddd
