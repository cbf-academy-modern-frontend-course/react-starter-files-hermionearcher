import React from 'react';
import Book from './components/Book';
import books from './models/books.json';

function App() {
  
  return books.map((book) => <Book key={book.id} book={book} />)
}

export default App;

