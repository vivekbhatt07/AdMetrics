import React from "react";

const BasicInput = ({ labelText, placeholderText }) => {
  return (
    <div className="flex flex-col gap-2">
      <label>{labelText}</label>
      <input
        className="border-2 border-[#ddd] py-2 px-2 focus:outline-0 focus:border-[#0096ff] transition-all rounded-md"
        placeholder={placeholderText}
      />
    </div>
  );
};

export default BasicInput;