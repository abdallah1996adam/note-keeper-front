import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Notes, LandingPage } from "./pages";
import { Header, Footer } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/notes" element={<Notes />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
