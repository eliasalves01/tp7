import React from 'react';
import BooksListPage from './pages/BooksListPage';
import Menu from './components/Menu';
import './App.css';  

function App() {
  return (
    <div className="app">
      <Menu />
      <BooksListPage />
    </div>
  );
}

export default App;
