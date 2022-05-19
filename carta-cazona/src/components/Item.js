import React from 'react';

function Item(props) {
    return (
        <div className='item'>
            <div className='comida'>
                <div className='nombre-del-item'>
                    <p>{(props.nombeDelItem)}</p>
                    <p className='descripcion-del-item'>{(props.descripcionDelItem)}</p>
                </div>                
                <div className='linea-central'>
                </div>
                <div className='precio-del-item'>
                    <p>${(props.precioDelItemtem)}</p>
                </div>
            </div>
        </div>
    );
}

export default Item;