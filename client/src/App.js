import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './components/HomePage/HomePage';
function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}
export default App;