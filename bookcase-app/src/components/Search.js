import React from "react";
import styled from "styled-components";
import { GrClose } from 'react-icons/gr';

const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  // align-items: center;
  text-align: center;
  width: 100%;
  margin-left: 3vh;    
`;
const SearchFromButton = styled.button`
  align-items: center;
  background-color: #0467fc;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  min-width: 80px;
  cursor: pointer;
  height: 30px;
  margin: 10px
  
  &:hover {
    background-color: lightblue;
  }
`;
const SearchBarForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  gap: 0;
  padding: 0;
  margin: 0;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 25px;
  border: solid 1px grey;
  border-radius: 5px;
  margin: 0;
  padding-right: 20px
`
const CloseStyle = {
  cursor: "pointer",
  marginLeft: "-18px",
  height: "100%"
}

const onClick = () => {
  console.log("Button Click")
}

const Search = ({ findBooks, keyword, setKeyword }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    findBooks(keyword);
  };
  const closeClick = () => {
    setKeyword("")
  }

  return (
    <SearchBarWrapper>
      <SearchBarForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          id="name"
          name="search"
          value={keyword}
          placeholder="Enter name, author, keyword or genre..."
          onChange={(e) => setKeyword(e.target.value)}
          required
        />
        <GrClose style={CloseStyle} onClick={closeClick}/>
        <SearchFromButton type="submit" onClick={onClick} value="Find">Find</SearchFromButton>
      </SearchBarForm>
    </SearchBarWrapper>
  );
};

export default Search;
