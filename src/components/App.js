
import React from "react";
import './../styles/App.css';
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import ItemDetail from "../pages/ItemDetail";
import ItemList from "../pages/ItemList";

const App = () => {
  return (
    <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
    </div>
  )
}

export default App
