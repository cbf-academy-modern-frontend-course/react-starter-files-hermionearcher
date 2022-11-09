import React from 'react';
import Book from './components/Book';
import Header from './components/Header';
import books from './models/books.json';

function App() {
  
  return (
    <>
    <Header />
    {books.map((book) => <Book key={book.id} book={book} />)}
    </>
    )
}

export default App;

