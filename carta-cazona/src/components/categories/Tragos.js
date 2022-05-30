import React from "react";
import Item from "../Item";
import Nav from "../Nav";

function Tragos(props) {
  return (
    <div className="inicio" id="menu">
      <Nav className="navbar" />
      <div className="holder">
        <h1 className="titulo-central">TRAGOS</h1>
        <div className="contenedor-categoria">
          <Item
            nombreItem="CAIPIRINHA CLÁSICA / MARACUYA"
            descripcionDelItem="Ron blanco, jugo de limón, almibar de maracuyá, menta y soda."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="CAIPIROSKA"
            descripcionDelItem="Frutos rojos y vodka."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="MOJITO"
            descripcionDelItem="Clásico / Maracuyá / Malibu / Frutos Rojos: Cachaza, almibar y jugo de limón."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="VODKA ORANGE"
            descripcionDelItem="Vodka, jugo de naranja y agua tónica."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="CAMPARI ORANGE"
            descripcionDelItem="Campari, jugo de naranja y agua tónica."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="CYNAR POMELO"
            descripcionDelItem="Cynar, azucar de mascabo, jugo de limón, jugo de pomelo y menta."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="GYNAR"
            descripcionDelItem="Gin, Cynar, jugo de pomelo, agua tónica, almibar y menta."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="APEROL SPRIT"
            descripcionDelItem="Aperol, champagne y soda."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="JAGGER POMELO"
            descripcionDelItem="Jagger, jugo de pomelo, jugo de limón, azúcar mascabo y menta."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="JAGGER BOOM"
            descripcionDelItem="Shot de jagger y cerveza rubia."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="NEGRONI"
            descripcionDelItem="Gin, Campari y vermu Rosso."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="BLACK RUSSIAN"
            descripcionDelItem="Vodka y licor de café."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="TRIDENTE"
            descripcionDelItem="Limón, pomelo, naranja, gancia y sprite."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="TEKILA PUNCH"
            descripcionDelItem="Tequila, pepino, limón, agua tónica y menta."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="CUBA LIBRE"
            descripcionDelItem="Ron dorado, jugo de limón y coca cola."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="SCOTICHLEMON"
            descripcionDelItem="Whisky, almibar, jugo de limón y soda."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="BOULEVARDIER"
            descripcionDelItem="Whisky, Campari y vermu Rosso."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="MARGOT"
            descripcionDelItem="Vino malbec, ron, almibar, jugo de limón y soda."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="FREYDIS"
            descripcionDelItem="Vino blanco, gin, jugo de naranja, almibar y romero."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="BABYLOVE"
            descripcionDelItem="Vino blanco, gin, aperol, frutos rojos y jugo de limón."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="GIN TONIC"
            descripcionDelItem="Gin Heraclito / Gin Apostoles / Gin Bombai / Gin Beefeater."
            precioDelItem="$ 420,00"
          />
        </div>
      </div>
    </div>
  );
}

export default Tragos;
