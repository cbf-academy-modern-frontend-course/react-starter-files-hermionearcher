import React from "react";
import BookList from "./components/Books/BookList";
import Header from "./components/Header/Header";
import books from "./models/books.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";

const addTitle = (title) => {
  console.log(`The book '${title}' was clicked`);
};

function App() {
  return (
    <Router>
      <Header />
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