import React, { useState } from "react";

const searchRowStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
  gap: 10,
  height: "3vh",
};
const searchInputStyle = {
  width: "60%",
  height: "2vh",

  // alignSelf: "center",
};
const searchFromButton = {
  height: "2.5vh",
  // alignSelf: "center",
};
const searchFormStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
  gap: 10,
};

const Search = ({findBooks}) => {
  const [keyword, setKeyword] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    findBooks(keyword)
    console.log(keyword)
  };

  return (
    <div style={searchRowStyle}>
      <form onSubmit={handleSubmit} style={searchFormStyle}>
        <p style={{ color: "red" }}>
          <em> {keyword && "Keywords Typed: " + keyword} </em>
        </p>
        <label>
          Keyword:
          <input
            style={searchInputStyle}
            type="text"
            id="name"
            name="search"
            value={findBooks.keyword}
            placeholder="Enter name, author, keyword or genre..."
            onChange={(e) => setKeyword(e.target.value)}
            required
          />
          <br />
          <br />
        </label>
        <input style={searchFromButton} type="submit" value="Find" />
      </form>
    </div>
  );
};

export default Search;
