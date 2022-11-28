import React from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import image from "../../models/error-book-cover.jpg";

const BasketItem = () => {
  return (
    <Basket>
      <img src={image} alt="book" />
      <div>
        <p>Title</p>
        <p>Author</p>
      </div>
      <BasketQty>
        <p>2</p>
        <div>
          <p>+</p>
          <p>-</p>
        </div>
      </BasketQty>
      <p>£200</p>
      <GrClose />
    </Basket>
  );
};

const Basket = styled.div`
  display: flex;
  flex-direction: row
  margin: 0;
  background-color: #f7f7f7;
  align-items: center;
  text-align: left;
  height: 100%;

//   @media (max-width: 700px) {
//     flex-direction: column;
//     width: 100%;
//     align-items: center;
//     text-align: center;
//     padding-bottom: 5px;
//   }
`;


const BasketQty = styled.div`
  display: flex;
  flex-direction: row
  margin: 0;
  align-items: center;
`;

export default BasketItem;
