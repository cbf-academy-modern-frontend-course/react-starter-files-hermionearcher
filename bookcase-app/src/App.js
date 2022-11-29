import React, { useState, useEffect } from "react";
import BookList from "./components/Books/BookList";
import data from "./models/books.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import axios from "axios";
import Basket from "./Pages/Basket";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/Scroll/ScrollToTop";

const addTitle = (title) => {
  console.log(`The book '${title}' was clicked`);
};

function App() {
  const [keyword, setKeyword] = useState("");
  const [books, setBooks] = useState(data);
  const [quantity, setQuantity] = useState(0);
  const [bookBasket, setBookBasket] = useState([]);
  const [basketValue, setBasketValue] = useState(0);

  useEffect(() => {
    fetchData();
    document.title = `Basket: ${quantity}`;
  }, [keyword]);

  const fetchData = () => {
    if (keyword === "") {
      return axios
        .get("data.json")
        .then((response) => {
          setBooks(response.data);
        })
        .catch((error) => console.error(error));
    } else {
      return axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${keyword}`)
        .then((response) => {
          if (response.data.items !== undefined || null)
            setBooks(filterItems(response.data.items, keyword));
        });
    }
  };

  const filterItems = (array, string) => {
    return array.filter((o) =>
      Object.values(o).some(
        (k) =>
          k.title !== undefined &&
          k.title.toLowerCase().includes(string.toLowerCase())
      )
    );
  };

  return (
    <Router>
      <ScrollToTop />
      <Navbar
      basketValue={basketValue}
        quantity={quantity}
        setQuantity={setQuantity}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      <div>
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route
            exact
            path="/"
            element={
              <BookList
                keyword={keyword}
                setKeyword={setKeyword}
                bookBasket={bookBasket}
                setBookBasket={setBookBasket}
                basketValue={basketValue}
                setBasketValue={setBasketValue}
                books={books}
                addTitle={addTitle}
                quantity={quantity}
                setQuantity={setQuantity}
              />
            }
          />
          <Route
            path="/basket"
            element={
              <Basket
                books={books}
                bookBasket={bookBasket}
                basketValue={basketValue}
                setBasketValue={setBasketValue}
                setBookBasket={setBookBasket}
                quantity={quantity}
                setQuantity={setQuantity}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
