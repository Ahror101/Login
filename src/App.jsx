import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Cabinet from "./pages/cabinet"
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cabinet" element={<Cabinet/>} />
    </Routes>
  );
}
