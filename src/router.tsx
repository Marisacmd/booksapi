import React from "react";
import { Routes, Route } from "react-router-dom";
import BooksSearch from "./pages/BooksSearch/BooksSearch";
import Book from "./pages/Book/Book";

class AppRouter extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<BooksSearch />} />
        <Route path="/book/:id" element={<Book />} />
      </Routes>
    );
  }
}

export default AppRouter;
