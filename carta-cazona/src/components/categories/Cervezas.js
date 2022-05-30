import React from "react";
import Item from "../Item";
import Nav from "../Nav";

function Cervezas(props) {
  return (
    <div className="inicio" id="menu">
      <Nav className="navbar" />
      <div className="holder">
        <h1 className="titulo-central">CERVEZAS</h1>
        <h3 className="subtitulo">CERVEZAS</h3>
        <div className="contenedor-categoria">
          <Item
            nombreItem="HOPPY ALE"
            descripcionItem=""
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="AMERICAN AMBER ALE"
            descripcionItem="Medalla de oro"
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="BEST BITTER"
            descripcionItem=""
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="CRYO SESSION IPA"
            descripcionItem=""
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="GOLDEN ALE"
            descripcionItem=""
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="ENGLISH IPA"
            descripcionItem=""
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="RAUCHBIER"
            descripcionItem=""
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="PORTER"
            descripcionItem="Medalla de oro"
            precioDelItem="$ 420,00"
          />
        </div>
      </div>
    </div>
  );
}

export default Cervezas;
