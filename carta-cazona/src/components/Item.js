import React from 'react';

function Item(props) {
    return (
        <div className='item'>
            <div className='comida'>
                <div className='nombre-del-item'>
                    <p>{(props.nameItem)}</p>
                    <p className='descripcion-del-item'>{(props.descriptionItem)}</p>
                </div>                
                <div className='linea-central'>
                </div>
                <div className='precio-del-item'>
                    <p>${(props.priceItem)}</p>
                </div>
            </div>
        </div>
    );
}

export default Item;