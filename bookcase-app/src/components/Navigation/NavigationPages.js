import React from "react";
import { Link, Navigate } from "react-router-dom";

let pages = {
  home: "Home",
  about: "About",
  bookcase: "Bookcase",
};

const NavPagesWrapper = {
  display: "flex",
  paddingLeft: "2vh",
}

const navItemDiv = {
  padding: "1vh"
}

const NavigationPages = () => {
  return (
    <nav style={NavPagesWrapper}>
      <div style={navItemDiv}>
        <Link to="/">{pages.home}</Link>
      </div>
      <div style={navItemDiv}>
        <Link to={`/${pages.about}`}>{pages.about}</Link>
        </div>
      <div style={navItemDiv}>
        <Link to={`/${pages.bookcase}`}>{pages.bookcase}</Link>
      </div>
    </nav>
  );
};

export default NavigationPages;
