import React from "react";

const SelectInput = ({ labelText, placeholderText, className }) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label>{labelText}</label>
      <select className="border-2 border-[#ddd] py-2 px-2 focus:outline-0 focus:border-[#0096ff] transition-all rounded-md text-[#aaa]">
        <option value="" selected disabled hidden>
          {placeholderText}
        </option>
        <option value="Contained" className="text-[#000]">
          Contained
        </option>
        <option value="Outlined" className="text-[#000]">
          Outlined
        </option>
        <option value="Text" className="text-[#000]">
          Text
        </option>
      </select>
    </div>
  );
};

export default SelectInput;
