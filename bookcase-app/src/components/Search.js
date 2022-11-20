import React from "react";
import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  // align-items: center;
  text-align: center;
  width: 100%;
  margin-left: 3vh;    
`;
export const SearchFromButton = styled.input`
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
`;
export const SearchBarForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  gap: 10;
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 20px;
`

const Search = ({ findBooks, keyword, setKeyword }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    findBooks(keyword);
  };

  return (
    <SearchBarWrapper>
      <SearchBarForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          id="name"
          name="search"
          value={findBooks.keyword}
          placeholder="Enter name, author, keyword or genre..."
          onChange={(e) => setKeyword(e.target.value)}
          required
        />
        <SearchFromButton type="submit" value="Find" />
      </SearchBarForm>
    </SearchBarWrapper>
  );
};

export default Search;
