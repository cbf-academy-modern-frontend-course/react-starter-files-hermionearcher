import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

let pages = {
  home: "Home",
  about: "About",
  bookcase: "Bookcase",
};

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  // width: 50vh;
  padding: 2vh
`;

const NavItem = styled.div`
  padding: 1vh;
`;

const NavPages = () => {
  return (
    <NavWrapper>
      {Object.values(pages).map((page) => {
        return (
          <NavItem key={page}>
            <Link to={page === "Home" ? "/" : `/${page}`}>{page}</Link>
          </NavItem>
        );
      })}
    </NavWrapper>
  );
};

export default NavPages;
