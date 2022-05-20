import React from 'react';
import Item from '../Item';

function Vinos(props) {
    return (
        <div className='inicio' id='menu'>
            <h1>Vinos</h1>
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

export default Vinos;