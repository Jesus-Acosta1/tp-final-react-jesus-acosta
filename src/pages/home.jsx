import React from "react";
import { Link } from "react-router-dom";
import Cards from "../components/cards";
import pokemones from "../assets/pokemones1.png";

function Home() {
  return (
    <div className="home">
      <h1>Bienvenido a la Pokedex</h1>
      <img className="pokemones" src={pokemones} alt="Pokemones" />
      <div className="home-text">
        <p>
          Aquí podrás explorar una lista de Pokémon, ver sus detalles y guardar
          a tus favoritos para tenerlos siempre a mano. Este proyecto está
          construido con <strong>React</strong> y utiliza la API oficial de
          Pokémon.
        </p>
      </div>
      <div className="home-text">
        <p>
          Cada Pokémon tiene su historia, habilidades y tipos únicos. ¡No dudes
          en descubrirlos todos!
        </p>
      </div>
      <Link className="nav-links" to="/pokelist">
        Comenzamos
      </Link>
      <br />
    </div>
  );
}

export default Home;
