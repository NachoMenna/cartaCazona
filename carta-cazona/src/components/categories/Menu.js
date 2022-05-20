import React from 'react';
import Item from '../Item';

function Menu(props) {
    return (
        <div className='inicio' id='menu'>
            <h1>Menu</h1>
            <div className='container-category'>
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