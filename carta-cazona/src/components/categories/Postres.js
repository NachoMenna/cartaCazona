import React from "react";
import Item from "../Item";
import Nav from "../Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faCookie,
  faIceCream,
} from "@fortawesome/free-solid-svg-icons";

function Postres(props) {
  return (
    <div className="inicio" id="postres">
      <Nav className="navbar" />
      <div className="holder">
        <h1 className="titulo-central">Postres</h1>
        <h3 className="titulo-secundario">POSTRES (Individuales)</h3>
        {/* <div className="iconos">
          <FontAwesomeIcon icon={faCakeCandles} color="black" id="icon" />
          <FontAwesomeIcon icon={faIceCream} color="black" id="icon" />
          <FontAwesomeIcon icon={faCookie} color="black" id="icon" />
        </div> */}
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
