import React from 'react';
import Categoria from './Categoria';

function Inicio(props) {
    return (
        <div className='inicio'>
            <div className='contenedor-categorias'>
                <Categoria
                    link='menu'
                    imagen=''
                    textoCategoria='Menu'
                />
                <Categoria
                    link='postres'
                    imagen=''
                    textoCategoria='Potres'
                />
                <Categoria
                    id='bebidasSinAlcohol'
                    imagen=''
                    textoCategoria='Bebidas sin alcohol'
                />
                <Categoria
                    id='cervezas'
                    imagen=''
                    textoCategoria='Cervezas'
                />
                <Categoria
                    id='vinos'
                    imagen=''
                    textoCategoria='Tragos'
                />
                <Categoria
                    id='tragos'
                    imagen=''
                    textoCategoria='Vinos'
                />
            </div>
        </div>
    );
}

export default Inicio;
