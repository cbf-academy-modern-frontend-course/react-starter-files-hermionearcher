import React from 'react';
import BookList from './components/BookList';
import Header from './components/Header';
import books from './models/books.json'

const addTitle = (title) => {
  console.log(`The book '${title}' was clicked`);
};

function App() {
  return (
    <>
    <Header />
    <BookList books={books} addTitle={addTitle} />
    </>
    )
}

export default App;

