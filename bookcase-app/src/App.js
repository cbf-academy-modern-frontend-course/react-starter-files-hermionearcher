import React from "react";
import BookList from "./components/Books/BookList";
import Header from "./components/Navigation/Header";
import books from "./models/books.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Search from "./components/Search";

const addTitle = (title) => {
  console.log(`The book '${title}' was clicked`);
};

const url = (value) => `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`
const findBooks = async (value) => {
  const results = await fetch(url)
    .then(res => res.json());
    if (!results.error) {
      
    }
    console.log(value)
}

function App() {
  return (
    <Router>
      <Header />
      <Search findBooks={findBooks} />
      {/* <Search /> */}
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/bookcase"
            element={<BookList books={books} addTitle={addTitle} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;