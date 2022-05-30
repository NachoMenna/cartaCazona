import React from "react";
import Item from "../Item";
import Nav from "../Nav";

function Postres(props) {
  return (
    <div className="inicio" id="postres">
      <Nav className="navbar" />
      <div className="holder">
        <h1 className="titulo-central">Postres</h1>
        <h3 className="subtitulo">POSTRES (Individuales)</h3>
        <div className="contenedor-categoria">
          <Item
            nombreItem="TIRAMUSÚ"
            descripcionDelItem=""
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="OREO"
            descripcionDelItem=""
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="CHOCOTORTA"
            descripcionDelItem=""
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="CHEESECAKE"
            descripcionDelItem=""
            precioDelItem="$ 420,00"
          />
        </div>
      </div>
    </div>
  );
}

export default Postres;
