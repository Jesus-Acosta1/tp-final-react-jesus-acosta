import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import "./css/index.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import PokeDetails from "./pages/pokedetails";
import PokeList from "./pages/pokelist";
import PokeFav from "./pages/pokefav";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokelist" element={<PokeList />} />
          <Route path="/pokedetails/:id" element={<PokeDetails />} />
          <Route path="/pokefav" element={<PokeFav />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
