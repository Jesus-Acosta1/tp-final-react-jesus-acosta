import React from "react";
import { Link, useParams } from "react-router-dom";
import Cards from "../components/cards";
import { useState, useEffect } from "react";

function PokeDetails() {
  const { id } = useParams();
  const [pokeDetalles, setPokeDetalles] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setPokeDetalles(data))
      .catch((error) => {
        console.log("Error al cargar detalles:", error);
      });
  }, [id]);

  if (!pokeDetalles) return <p>Cargando detalles...</p>;

  const img =
    pokeDetalles.sprites?.front_default.official_artwork ||
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <>
      <div className="details-container">
        <h1>Pokemon</h1>
        <div className="card-all">
          <h2>{pokeDetalles.name}</h2>
          <div className="details-card">
            <div
              className={`image-section ${pokeDetalles.types[0]?.type.name}`}
            >
              <img
                className="pokemon-img img-act"
                src={img}
                alt={pokeDetalles.name}
              />
            </div>

            <div className="info-section">
              <div className="info-header">
                <span className="type-badge">Tipo</span>
                <span
                  className={`type-text type-section ${pokeDetalles.types[0]?.type.name}`}
                >
                  {pokeDetalles.types[0]?.type.name.toUpperCase()}
                </span>
                {pokeDetalles.types[1] && (
                  <span
                    className={`type-text type-section ${pokeDetalles.types[1]?.type.name}`}
                  >
                    {pokeDetalles.types[1]?.type.name.toUpperCase()}
                  </span>
                )}
              </div>

              <div className="info-body">
                <span className="stats-text">
                  <p>
                    <b>Altura:</b> {pokeDetalles.height / 10} m
                  </p>
                  <p>
                    <b>Peso:</b> {pokeDetalles.weight / 10} kg
                  </p>
                </span>
                {/* <p className="description">{pokeDetalles.description}</p> */}
                <span className="stats-text">
                  <b>Estadísticas</b>
                  <p>
                    <b>Vitalidad:</b> {pokeDetalles.stats[0]?.base_stat}
                  </p>
                  <p>
                    <b>Ataque:</b> {pokeDetalles.stats[1]?.base_stat}
                  </p>
                  <p>
                    <b>Defensa:</b> {pokeDetalles.stats[2]?.base_stat}
                  </p>
                  <p>
                    <b>Ataque Especial:</b> {pokeDetalles.stats[3]?.base_stat}
                  </p>
                  <p>
                    <b>Defensa Especial:</b> {pokeDetalles.stats[4]?.base_stat}
                  </p>
                  <p>
                    <b>Velocidad:</b> {pokeDetalles.stats[5]?.base_stat}
                  </p>
                </span>
                <span>
                  <b>Movimietos</b>
                  <p>
                    {" "}
                    <b> {pokeDetalles.moves[0]?.move.name} </b>{" "}
                  </p>
                  <p>
                    {" "}
                    <b> {pokeDetalles.moves[2]?.move.name} </b>{" "}
                  </p>
                  <p>
                    {" "}
                    <b> {pokeDetalles.moves[3]?.move.name} </b>{" "}
                  </p>
                  <p>
                    {" "}
                    <b> {pokeDetalles.moves[4]?.move.name} </b>{" "}
                  </p>
                  <p>
                    {" "}
                    <b> {pokeDetalles.moves[5]?.move.name} </b>{" "}
                  </p>
                </span>
                <span>
                  <p>{pokeDetalles.abilities[0]?.ability.name}</p>
                  <p>{pokeDetalles.abilities[1]?.ability.name}</p>
                </span>
                <span>{/* <p>{pokeDetalles.}</p> */}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="footer-text">
          ¿Sabías que cada Pokémon tiene una historia única en el universo?
          <br />
          ¡Atrápalos todos y descubre sus secretos!
        </p>
        <div className="card-buttons">
          <Link className="nav-links" to={`/pokelist`}>
            Volver
          </Link>
        </div>
      </div>
    </>
  );
}

export default PokeDetails;
