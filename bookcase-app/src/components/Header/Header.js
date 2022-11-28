import React from "react";
import Search from "../Search";
import NavPages from "./NavPages";
import { useLocation } from "react-router-dom";
import PageTitle from "./PageTitle";
import styled from "styled-components";

const Header = ({ keyword, setKeyword }) => {
  const location = useLocation();
  let currentUrl = location.pathname;

  return (
    <>
      <HeaderWrapper component={"div"}>
        <PageTitle text={"My e-Book Library"} />
        <NavPages />
        {(currentUrl === "/Bookcase" || currentUrl === "/bookcase") && (
          <Search keyword={keyword} setKeyword={setKeyword} value={keyword} />
        )}
        {/* <h2>Basket Total: £0.00</h2 <NavigationButtons /> */}
      </HeaderWrapper>
      {keyword && (
        <Keyword>
          <p style={keywordStyle}>
            <strong>Keywords Typed: </strong>
            {keyword}
          </p>
        </Keyword>
      )}
    </>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  // text-align: center;
  padding: 0;
  width: 100%;
  flex-direction: row;

  overflow: hidden;
  background-color: #fff;
  position: sticky;
  top: 0;

  @media (max-width: 1026px) {
    flex-direction: column;
    // justify-content: center;
  }
`;
const Keyword = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin: 0;
`;
const keywordStyle = {
  width: "90%",
  fontWeight: "normal",
  inlineSize: "100vh",
  overflowWrap: "break-word",
};
