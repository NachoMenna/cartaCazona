import React from 'react';
import { Link } from 'react-router-dom';

function Categoria(props) {
    return(
        <div className='categoria'>
            <Link to={(`/${props.link}`)}><img src={(`images/cazona-${props.imagen}.jpg`)} alt="imagen-categoria" /></Link>  
            <h3 className='texto-categoria'>{props.textoCategoria}</h3>
        </div>
    );
}

export default Categoria;