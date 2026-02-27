import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<about />} />
        <Route path="/resume" element={<resume />} />
      </Routes>
    </>
  );
}
