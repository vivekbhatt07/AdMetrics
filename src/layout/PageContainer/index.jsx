import React from "react";
import Header from "../Header";

const PageContainer = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="px-9 xl:px-8 py-4 xl:h-[92vh] bg-[#fafafa]">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
