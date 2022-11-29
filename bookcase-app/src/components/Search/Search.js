import React from "react";
import Form from "react-bootstrap/Form";

const Search = ({ keyword, setKeyword }) => {
  return (
    <Form style={{ padding: "0 10vh" }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search by book title"
        />{" "}
        <Form.Text style={{ paddingLeft: "1vh" }} className="text-muted">
          {keyword}
        </Form.Text>
      </Form.Group>
    </Form>
  );
};

export default Search;
