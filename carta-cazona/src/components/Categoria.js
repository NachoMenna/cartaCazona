import React from "react";
import "../styles/categoria.css";
import { Link } from "react-router-dom";

function Categoria(props) {
  return (
    <div className="categoria">
      <Link to={`/${props.link}`}>
        <img src={`images/cazona-${props.image}.jpg`} alt="imagen-categoria" />
        <h2 style={{ textDecoration: "none" }}>{props.tituloImg}</h2>
      </Link>
    </div>
  );
}

export default Categoria;
