import React from 'react';
import './styles.css';

function Book({ book, key }) {
  const truncate = (input) => (
    input?.length > 252 ? `${input.substring(0,250)}...` : input
  )
  // const {
  //   volumeInfo: {
  //     title,
  //     authors,
  //     description,
  //     imageLinks: { thumbnail}
  //   },
  //   saleInfo : { retailPrice,currencyCode }
  // } = book
  const bookStyle = {
    display: "flex",
    padding: "1vh",
    margin: 0,
    borderBottom: "1px solid lightgrey"
  }
  const bookCoverStyle = {
    // maxHeight: "100%"
  }
  const bookTextStyle = {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    marginLeft: "1vh",
    alignSelf: "center",
  }
  const bookCoverWrapper = {
    alignSelf: "center",
    width: "15vh"
  }
  const bookAddButtonWrapper = {
    alignSelf: "start",
    width: "20vh",
    paddingLeft: "1vh"
  }
  const bookAddButton = {
    backgroundColor: "#0467fc",
    color: "#fff",
    border: "none",
    padding: "8px 10px",
    borderRadius: "5px",
    fontSize: "1.1em",
    minWidth: "80px"
  }

  return (
    <>
      <div style={bookStyle} key={key}>
        <div style={bookCoverWrapper}>
          <img className='book-img' style={bookCoverStyle} alt={`${book.volumeInfo.title} book cover`} src={book.volumeInfo.imageLinks.thumbnail} />
        </div>
        <div className="book-text" style={bookTextStyle}>
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
        <div style={bookAddButtonWrapper}>
          <button style={bookAddButton}>Add +</button>
        </div>
      </div>


    </>
  )
}

export default Book;
