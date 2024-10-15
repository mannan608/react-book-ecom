import { createContext, useEffect, useState } from "react";

const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await fetch(`https://gutendex.com/books`);
    const data = await res.json();
    setBooks(data?.results);
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <BookContext.Provider value={{ books }}>{children}</BookContext.Provider>
  );
};

export { BookContext, BookProvider };
