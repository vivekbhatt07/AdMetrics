import React from "react";

const PrimaryContainer = ({
  children,
  title,
  titleProps,
  style,
  bodyStyle,
}) => {
  return (
    <div
      className="flex flex-col border border-[#ddd] rounded-sm"
      style={{ ...style }}
    >
      <div className="flex justify-between border-b border-[#ddd] p-4">
        <h3 className="capitalize">{title}</h3>
        <div className="flex">{titleProps}</div>
      </div>
      <div style={{ ...bodyStyle }}>{children}</div>
    </div>
  );
};

export default PrimaryContainer;
