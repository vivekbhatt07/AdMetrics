import React from "react";

const TextAreaInput = ({ labelText, placeholderText, className, style }) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="font-medium">{labelText}</label>
      <textarea
        className="border-2 border-[#ddd] py-2 px-2 focus:outline-0 focus:border-[#0096ff] transition-all rounded-md resize-none"
        placeholder={placeholderText}
        style={{ ...style }}
      />
    </div>
  );
};

export default TextAreaInput;
