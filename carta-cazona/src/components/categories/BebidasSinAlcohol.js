import React from 'react';
import Item from '../Item';

function BebidasSinAlcohol(props) {
    return (
        <div className='inicio' id='menu'>
            <h1>Bebidas Sin Alcohol</h1>
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

export default BebidasSinAlcohol;