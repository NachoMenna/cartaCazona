import React from 'react';
import Item from '../Item';

function Cervezas(props) {
    return (
        <div className='inicio' id='menu'>
            <h1>Cervezas</h1>
            <div className='container-category'>
                <Item
                    nameItem=''
                    descripcionItem=''
                    priceItem=''
                />                
            </div>
        </div>
    );
}

export default Cervezas;