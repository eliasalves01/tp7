import React from "react";
import CardBook from "./CardBook";

const BookList = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
        <CardBook key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
