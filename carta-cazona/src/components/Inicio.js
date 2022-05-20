import React from 'react';
import Category from './Category';

function Inicio(props) {
    return (
        <div className='inicio'>
            <div className='container-category'>
                <Category
                    link='menu'
                    image=''
                    textCategory='Menu'
                />
                <Category
                    link='postres'
                    image=''
                    textCategory='Postres'
                />
                <Category
                    link='bebidasSinAlcohol'
                    image=''
                    textCategory='Bebidas sin alcohol'
                />
                <Category
                    link='cervezas'
                    image=''
                    textCategory='Cervezas'
                />
                <Category
                    link='vinos'
                    image=''
                    textCategory='Tragos'
                />
                <Category
                    link='tragos'
                    image=''
                    textCategory='Vinos'
                />
            </div>
        </div>
    );
}

export default Inicio;
