import React from 'react';
import Item from './Item';

function Menu(props) {
    return (
        <div className='inicio' id='menu'>
            <div className='contenedor-categorias'>
                <Item
                    link=''
                    descripcionDelItem=''
                    precioDelItem=''
                />                
            </div>
        </div>
    );
}

export default Menu;