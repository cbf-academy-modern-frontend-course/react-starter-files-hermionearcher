import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const BookPropTypes = ({ book, key, addTitle }) => {
  const truncate = (input) => (
    input?.length > 252 ? `${input.substring(0, 250)}...` : input
  )
  const {
    volumeInfo: {
      title,
      authors,
      description,
      imageLinks: { smallThumbnail }
    },
    saleInfo: { retailPrice }
  } = book
  const bookStyle = {
    display: "flex",
    padding: "1vh",
    margin: 0,
    borderBottom: "1px solid lightgrey",
  };
  const bookCoverStyle = {
    // maxHeight: "100%"
  };
  const bookTextStyle = {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    marginLeft: "1vh",
    alignSelf: "center",
    width: "100%",
  };
  const bookCoverWrapper = {
    alignSelf: "center",
    width: "30vh",
  };
  const bookAddButtonWrapper = {
    alignSelf: "start",
    width: "20vh",
    paddingLeft: "1vh",
  };
  const bookAddButton = {
    backgroundColor: "#0467fc",
    color: "#fff",
    border: "none",
    padding: "8px 10px",
    borderRadius: "5px",
    fontSize: "1.1em",
    minWidth: "80px",
    cursor: "pointer",
  };

  return (
    <>
      <div style={bookStyle} key={key}>
        <div style={bookCoverWrapper}>
          <img className="book-img" style={bookCoverStyle} alt={`${title} book cover`} src={smallThumbnail} />
        </div>
        <div className="book-text" style={bookTextStyle}>
          <h2>{title}</h2>
          {authors.length > 1 ? (
            <p>{authors.join(" and ")}</p>
          ) : (
            <p>{authors}</p>
          )}

          {retailPrice && (
            <p>{retailPrice.amount}{" "}<strong>{retailPrice.currencyCode}</strong></p>
          )}
          <p>{truncate(description)}</p>
        </div>
        <div style={bookAddButtonWrapper}>
          <button
            style={bookAddButton}
            onClick={() => addTitle(title)}
          >
            Add +
          </button>
        </div>
      </div>
    </>
  );
}

BookPropTypes.propTypes = {
  volumeInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    imageLinks: PropTypes.shape({ smallThumbnail: PropTypes.string.isRequired }),
  }),
  saleInfo: PropTypes.shape({
    retailPrice: PropTypes.shape({
      amount: PropTypes.string.isRequired,
    }),
  }),
};

BookPropTypes.defaultProps = {
  saleInfo: {
    retailPrice: { amount: "No price provided", }
  },
};


export default BookPropTypes;
