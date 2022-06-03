import React from "react";
import Item from "../Item";
import Nav from "../Nav";

function BebidasSinAlcohol(props) {
  return (
    <div className="inicio" id="menu">
      <Nav className="navbar" />
      <div className="holder">
        <h1 className="titulo-central">BEBIDAS SIN ALCOHOL</h1>
        <h3 className="titulo-secundario">POSTRES (Individuaes)</h3>
        <div className="contenedor-categoria">
          <Item
            nombreItem="LICUADOS FRUTALES: CON LECHE / CON AGUA."
            descripcionDelItem=""
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="COCA COLA / COCA COLA CERO 500ml"
            descripcionDelItem=""
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="FANTA / FANTA CERO 500ml"
            descripcionDelItem=""
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="SPRITE / SPRITE CERO 500ml"
            descripcionDelItem=""
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="AGUA SABORIZADA 500ml"
            descripcionDelItem="Limonada, naranja, pera, pomelo."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="AGUA MINERAL 500ml"
            descripcionDelItem=""
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="SODA 500ml"
            descripcionDelItem=""
            precioDelItem="$ 420,00"
          />
        </div>
      </div>
    </div>
  );
}

export default BebidasSinAlcohol;
