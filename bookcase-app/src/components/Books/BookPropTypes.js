import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const BookItem = styled.div`
  display: flex;
  margin: 0;
  border-bottom: 1px solid lightgrey;
  align-items: center;
  // width: 97%;
  text-align: left;
  height: 100%;
  @media (max-width: 700px) {
    flex-direction: column;
    // justify-content: center;
  }
`;
const BookCover = styled.div`
  align-self: center;
  @media (max-width: 700px) {
    justify-content: flex-start;
    top: 0;
  }
`;
const BookText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;

  &:not(:last-child) {
    display: block;
    padding: 0 1vh 0 1vh;
    margin: 0;
    width: 100%;
  }
`;
const BookButtonWrapper = styled.div`
  align-self: start;
  width: 20vh;
  padding: 1vh 0 1vh 0;
  
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const BookButton = styled.button`
  background-color: #0467fc;
  color: #fff;
  border: none;
  padding: 8px 10px;
  border-radius: 5px;
  font-size: 1.1em;
  min-width: 80px;
  cursor: pointer;
  
  @media (max-width: 700px) {
    width: 100%;  
  }
`;

const BookPropTypes = ({ book, key, addTitle }) => {
  const truncate = (input) =>
    input?.length > 252 ? `${input.substring(0, 250)}...` : input;
  const {
    volumeInfo: {
      title,
      authors,
      description,
      imageLinks: { thumbnail },
    },
    saleInfo: { retailPrice },
  } = book;

  return (
    <BookItem key={key}>
      <BookCover>
        <img className="book-img" alt={`${title} book cover`} src={thumbnail} />
      </BookCover>
      <BookText>
        <h2>{title}</h2>
        {authors.length > 1 ? <p>{authors.join(" and ")}</p> : <p>{authors}</p>}

        {retailPrice && (
          <p>
            {retailPrice.amount} <strong>{retailPrice.currencyCode}</strong>
          </p>
        )}
        <p>{truncate(description)}</p>
      </BookText>
      <BookButtonWrapper>
        <BookButton onClick={() => addTitle(title)}>Add +</BookButton>
      </BookButtonWrapper>
    </BookItem>
  );
};

BookPropTypes.propTypes = {
  volumeInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    imageLinks: PropTypes.shape({ thumbnail: PropTypes.string.isRequired }),
  }),
  saleInfo: PropTypes.shape({
    retailPrice: PropTypes.shape({
      amount: PropTypes.string.isRequired,
    }),
  }),
};

BookPropTypes.defaultProps = {
  saleInfo: {
    retailPrice: { amount: "No price provided" },
  },
};

export default BookPropTypes;
