import React from 'react';
import '../style/CardBook.css';  

const CardBook = ({ book }) => {
  return (
    <div className="card-book">
      <h3>{book.title}</h3>
      <p>Autor: {book.author}</p>
      {book.cover && <img src={book.cover} alt={`Capa de ${book.title}`} />}
    </div>
  );
};

export default CardBook;
