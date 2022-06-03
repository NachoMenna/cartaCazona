import React from "react";
import Item from "../Item";
import Nav from "../Nav";

function Vinos(props) {
  return (
    <div className="inicio" id="menu">
      <Nav className="navbar" />
      <div className="holder">
        <h1 className="titulo-central">VINOS</h1>
        <h3 className="titulo-secundario">VINOS</h3>
        <div className="contenedor-categoria">
          <Item
            nombreItem="DILEMA MALBEC"
            descripcionDelItem=""
            precioDelItem="$ 450,00"
          />
          <Item
            nombreItem="OTRO LOCO MALBEC"
            descripcionDelItem=""
            precioDelItem="$ 450,00"
          />
          <Item
            nombreItem="CORDERO CON PIEL DE LOBO"
            descripcionDelItem=""
            precioDelItem="$ 450,00"
          />
          <Item
            nombreItem="PERRO CALLEJERO"
            descripcionDelItem=""
            precioDelItem="$ 450,00"
          />
          <Item
            nombreItem="PISPI"
            descripcionDelItem=""
            precioDelItem="$ 450,00"
          />
          <Item
            nombreItem="DILEMA BLANCO O ROSADO"
            descripcionDelItem=""
            precioDelItem="$ 450,00"
          />
          <Item
            nombreItem="ALMA MORA"
            descripcionDelItem=""
            precioDelItem="$ 450,00"
          />
        </div>
      </div>
    </div>
  );
}

export default Vinos;
