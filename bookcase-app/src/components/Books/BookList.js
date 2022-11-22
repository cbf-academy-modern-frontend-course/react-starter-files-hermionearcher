import React from 'react'
import BookPropTypes from './BookPropTypes'

const BookList = (props) => {
  return (
    props.books.map((book) => <BookPropTypes book={book} addTitle={props.addTitle} />)
)
}

export default BookList