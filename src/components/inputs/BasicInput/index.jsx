import React from "react";

const BasicInput = ({ labelText, placeholderText, className }) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label>{labelText}</label>
      <input
        className="border-2 border-[#ddd] py-2 px-3 focus:outline-0 focus:border-[#0096ff] transition-all rounded-md"
        placeholder={placeholderText}
      />
    </div>
  );
};

export default BasicInput;
