import React, { useState, useEffect } from "react";
import Search from "../Search";
import NavPages from "./NavPages";
import { useLocation } from "react-router-dom";
import PageTitle from "./PageTitle";
import styled from "styled-components";

const url = (value) =>
  `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`;

const findBooks = async (value) => {
  const results = await fetch(url).then((res) => res.json());
  if (!results.error) {
  }
  console.log(value);
};

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

  @media (max-width: 700px) {
    flex-direction: column;
    // justify-content: center;
  }
`;
const Keyword = styled.h3`
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
const Header = () => {
  const [keyword, setKeyword] = useState("");
  const location = useLocation();
  let currentUrl = location.pathname;

  return (
    <>
      <HeaderWrapper>
        <PageTitle text={"My e-Book Library"} />
        <NavPages />
        {currentUrl === "/Bookcase" && 
          <Search
            findBooks={findBooks}
            keyword={keyword}
            setKeyword={setKeyword}
          />
        }
        {/* <h2>Basket Total: £0.00</h2 <NavigationButtons /> */}
      </HeaderWrapper>
      {keyword && (
        <Keyword>
          Keywords Typed: <p style={keywordStyle}>{keyword}</p>
        </Keyword>
      )}
    </>
  );
};

export default Header;
