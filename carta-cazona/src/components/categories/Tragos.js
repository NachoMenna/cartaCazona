import React from 'react';
import Item from '../Item';

function Tragos(props) {
    return (
        <div className='inicio' id='menu'>
            <h1>Tragos</h1>
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

export default Tragos;