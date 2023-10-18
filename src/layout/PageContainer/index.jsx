import React from "react";
import Header from "../Header";

const PageContainer = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="px-8 py-4 h-[92vh]">{children}</div>
    </div>
  );
};

export default PageContainer;
