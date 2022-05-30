import "../styles/inicio.css";
import React from "react";
import Categoria from "./Categoria";

function Inicio(props) {
  return (
    <div className="holder">
      <div className="contenedor-categorias">
        <Categoria
          link="menu"
          image="menu"
          textCategory="Menu"
          className="categoria menu"
          tituloImg="Menú"
        />
        <Categoria
          link="postres"
          image="postres"
          textCategory="Postres"
          className="categoria"
          id="postres"
          tituloImg="Postres"
        />
        <Categoria
          link="bebidasSinAlcohol"
          image="sinAlcohol"
          textCategory="Bebidas sin alcohol"
          className="categoria sinAlcohol"
          tituloImg="Bebidas sin Alcohol"
        />
        <Categoria
          link="cervezas"
          image="cervezas"
          textCategory="Cervezas"
          id="categoryBlock"
          tituloImg="Cervezas"
        />
        <Categoria
          link="vinos"
          image="vinos"
          textCategory="Tragos"
          id="categoryBlock"
          tituloImg="Vinos"
        />
        <Categoria
          link="tragos"
          image="tragos"
          textCategory="Vinos"
          id="categoryBlock"
          tituloImg="Tragos"
        />
      </div>
    </div>
  );
}

export default Inicio;
