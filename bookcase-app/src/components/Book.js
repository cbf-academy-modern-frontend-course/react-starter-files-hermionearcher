import React from 'react';

function Book({ book, key }) {
  const truncate = (input) => (
    input?.length > 202 ? `${input.substring(0,200)}...` : input
  )
  const bookStyle = {
    display: "flex",
    padding: 0,
    borderBottom: "1px solid lightgrey"
  }
  const bookCoverStyle = {
    // maxHeight: "100%"
  }
  const bookTextStyle = {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    marginLeft: "1vh"
  }
  const bookCoverWrapper = {
    alignSelf: "center",
    width: "15vh"
  }

  return (
    <>
      <div style={bookStyle} key={key}>
        <div style={bookCoverWrapper}>
          <img className='book-img' style={bookCoverStyle} alt={`${book.volumeInfo.title} book cover`} src={book.volumeInfo.imageLinks.thumbnail} />
        </div>
        <div style={bookTextStyle}>
          <h2>{book.volumeInfo.title}</h2>
          {book.volumeInfo.authors.length > 1 ? (
            <p>{book.volumeInfo.authors.join(" and ")}</p>
          ) : (
            <p>{book.volumeInfo.authors}</p>
          )}

          {book.saleInfo.retailPrice &&
            <p>{book.saleInfo.retailPrice.amount} <strong>{book.saleInfo.retailPrice.currencyCode}</strong></p>
          }
          <p>{truncate(book.volumeInfo.description)}</p>
        </div>
      </div>


    </>
  )
}

export default Book;
