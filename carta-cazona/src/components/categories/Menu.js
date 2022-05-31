import "../../styles/menu.css";
import React from "react";
import Item from "../Item";
import Nav from "../Nav";

function Menu(props) {
  return (
    <div className="menu">
      <Nav className="navbar" />
      <div className="holder">
        <h1 className="titulo-central">Menu</h1>
        <h3 className="titulo-secundario">PAPAS</h3>
        <div className="contenedor-categoria">
          <Item
            nombreItem="PAPAS CLÁSICAS"
            descripcionDelItem=""
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="PAPAS CON CHEDDAR, PANCETA Y VERDEO"
            descripcionDelItem=""
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="PAPAS CON GUACAMOLES"
            descripcionDelItem=""
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="PAPAS CAZONA"
            descripcionDelItem=""
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="PAPAS BRAVAS PICANTES"
            descripcionDelItem=""
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="PAPAS NAPOLITANAS"
            descripcionDelItem=""
            precioDelItem="$ 420,00"
          />
        </div>

        <h3 className="titulo-secundario">EMPANADAS</h3>
        <div className="contenedor-categoria">
          <Item
            nombreItem="ARABES"
            descripcionDelItem=""
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="SALADAS"
            descripcionDelItem=""
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="CAPRESSE"
            descripcionDelItem=""
            precioDelItem="$ 420,00"
          />
        </div>
        <h3 className="titulo-secundario">TABLAS</h3>
        <div className="contenedor-categoria">
          <Item
            nombreItem="TABLA CALIENTE"
            descripcionDelItem="2 empanadas saladas, milanesa cortada en dados, 2 bastones de muzzarella, papas fritas, aros de cebolla rebosados y salsa de la casa."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="TABLA FRÍA"
            descripcionDelItem="Salame, bondiola, queso pategras, queso azul, queso fontina, jamón cocido y aceitunas."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="TEQUEÑOS"
            descripcionDelItem=""
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="CAZUELA DE QUESOS"
            descripcionDelItem=""
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="RABAS CON PAPAS"
            descripcionDelItem=""
            precioDelItem="$ 420,00"
          />
        </div>
        <h3 className="titulo-secundario">WRAPS</h3>
        <div className="contenedor-categoria">
          <Item
            nombreItem="WRAP DE POLLO Y VERDURAS"
            descripcionDelItem="Tortilla mezicana con base de mayonesa casera, mix de hojas verdes, tomate, milanesa de pollo y cebolla caramelizada."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="WRAP DE POLLO ESPECIAL"
            descripcionDelItem=" Tortilla mexicana con base de mayonesa casera, pollo champiñones, cebolla caramelizada, tomate, queso y mostaza."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="WRAP ROQUEFORT"
            descripcionDelItem="Tortilla mexicana con base de mayonesa casera, rúcula, cebolla caramelizada, tomate queso, queso azúl, y mix de frutos secos."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="WRAP VEGETARIANO"
            descripcionDelItem="Tortilla mexicana con base de mayonesa casera, huevo a la plancha, rúcula, tomate, guacamole y mix de frutos secos."
            precioDelItem="$ 420,00"
          />
        </div>
        <h3 className="titulo-secundario">LOMOS</h3>
        <div className="contenedor-categoria">
          <Item
            nombreItem="SIMPLE"
            descripcionDelItem="Pan de trigo, queso jamón cocido, bife de lomo y mayo de la casa."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="COMPLETO"
            descripcionDelItem="Pan de trigo, lechuga, tomate, queso, jamón cocido, bife de lomo y mayo de la casa."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="VEGETARIANO"
            descripcionDelItem="Milanesa de berenjena, rúcula, tomate, queso, huevo y mayonesa."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="CAZONA"
            descripcionDelItem="Pan de campo, doble bife de lomo, doble cheddar, cebolla caramelizada, bacon y salsa de la caza."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="ARGENTO"
            descripcionDelItem="Pan de trigo, bife de lomo, queso provoleta, repollo morado, chimichurri y mayo de la casa."
            precioDelItem="$ 420,00"
          />
        </div>
        <h3 className="titulo-secundario">HAMBURGUESAS</h3>
        <div className="contenedor-categoria">
          <Item
            nombreItem="CLÁSICA"
            descripcionDelItem="Pan de papa, medallón, lechuga, tomate, cheddar y mayonesa casera."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="AMERICANA"
            descripcionDelItem="Pan de papa, medallón, bacon, cheddar, cebolla caramelizada y barbacoa."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="MEXICANA GUADALAJARA"
            descripcionDelItem="Pan de papa, medallón, guacamole, queso tybo, lechuga, salsa picante y mayo de la caza."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="BLUE CHESSE"
            descripcionDelItem="Pan de papa, medallón, queso azúl, champiñones, rúcula y mayonesa de la caza."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="CAZONABURGUER"
            descripcionDelItem="Pan de papa, doble medallón, cheddar, bacon, huevo y cebolla caramelizada."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="CHEESE"
            descripcionDelItem="Pan de papa, medallón, doble cheddar, cebolla y ketchup."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="ARGENTA"
            descripcionDelItem="Pan de papa, medallón, queso provoleta, repollo morado, chimichurri y mayonesa de la caza."
            precioDelItem="$ 420,00"
          />
          <Item
            nombreItem="CAZA BIS"
            descripcionDelItem="Pan de papa, doble medallón, doble cheddar, champiñones, lechuga, pepinillos y salsa de la caza."
            precioDelItem="$ 420,00"
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
