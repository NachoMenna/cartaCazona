import React from "react";
import "../styles/item.css";

function Item(props) {
  return (
    <div id="items">
      <div className="comida">
        <div className="nombre item">{props.nombreItem}</div>
        <div className="precio item">{props.precioDelItem}</div>
      </div>
      <div className="descripcion item">
        <p>{props.descripcionDelItem}</p>
      </div>
    </div>
  );
}

export default Item;
