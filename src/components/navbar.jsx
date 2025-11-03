import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home";
import PokeList from "../pages/pokelist";
import PokeDetails from "../pages/pokedetails";
import pokeball from "../assets/pokeball-2.png";

function NavBar() {
  const onclick = () => {
    window.location.href = `/`;
  };
  return (
    <nav className="barra">
      <img className="logo-poke" src={pokeball} alt="pokeball" />
      <ul className="nav-list">
        <li className="nav-item">
          <Link className="nav-links " to="/">
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-links" to="/pokelist">
            Pokemons
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
