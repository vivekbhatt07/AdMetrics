import React from "react";
import Header from "../Header";

const PageContainer = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="px-8 py-4">{children}</div>
    </div>
  );
};

export default PageContainer;
