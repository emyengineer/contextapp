import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "The Way of Kings", id: 1 },
    { title: "Gone with the wind", id: 2 },
    { title: "the final empire", id: 3 },
  ]);
  return [
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>,
  ];
};

export default BookContextProvider;
