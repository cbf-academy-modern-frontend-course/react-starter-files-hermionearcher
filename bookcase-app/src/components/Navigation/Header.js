import React from "react";
import { Link, Navigate } from "react-router-dom";
import Search from "../Search";
import NavigationButtons from "./NavigationButtons";
import NavigationPages from "./NavigationPages";

const Header = () => {
  const headerStyle = {
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: 0,
  };
  const HeaderTopbar = {
    display: "flex",
    position: "sticky",
    width: "100vh",
    backgroundColor: "white",
    alignItems: "center",
    height: "5vh",
    top: 0
  }

  return (
    <div style={headerStyle}>
      <div style={HeaderTopbar}>
        <h1>My e-Book Library</h1>
        <NavigationPages />
      </div>
      {/* <h2>Basket Total: £0.00</h2>
      <NavigationButtons /> */}
      {/* <Search /> */}
    </div>
  );
};

export default Header;
