
import React from "react";
import './../styles/App.css';
import Navigation from "./Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetail from "../pages/ItemDetail";
import ItemList from "../pages/ItemList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/items/:id" element={<ItemDetail />} />
      </Routes>
    </Router>
  )
}

export default App
