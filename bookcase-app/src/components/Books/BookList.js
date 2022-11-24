import React from 'react'
import BookPropTypes from './BookPropTypes'
import styled from "styled-components";

const ListOfBooks = styled.div`
padding: 0 10vh
`;

const BookList = (props) => {
  return (
    <ListOfBooks>
      {props.books.map((book) => <BookPropTypes book={book} addTitle={props.addTitle} />)}
    </ListOfBooks>
)
}

export default BookList