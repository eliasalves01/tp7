import React, { useEffect, useState } from "react";
import BookList from "../components/BookList";

const BooksListPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json")
      .then((response) => response.json())
      .then((data) => {
        // Converte o objeto para um array de livros
        const booksArray = Object.values(data);
        setBooks(booksArray);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Lista de Livros Cadastrados</h1>
      <BookList books={books} />
    </div>
  );
};

export default BooksListPage;
