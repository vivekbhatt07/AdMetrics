import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const headerBoxShadowStyle = {
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  };
  return (
    <header className="h-[8vh] outline shadow-lg" style={headerBoxShadowStyle}>
      <div className="flex justify-between px-8 py-4">
        <h1 className="uppercase">app Logo</h1>
        <nav className="flex gap-6">
          <NavLink to="/" className="uppercase">
            Dashboard
          </NavLink>
          <NavLink to="/createAd" className="uppercase">
            Create Ads
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
