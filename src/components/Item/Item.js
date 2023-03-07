import React from "react";
import './Item.css';
import {useNavigate} from 'react-router-dom';

const Item = ({id, title , imageUrl}) => {

    const navigate = useNavigate();
    function abrirItem(){
        navigate("/filmDetail/"+id);
    }

    return (
        
            <div className="item-pelicula" onClick={abrirItem}>
                <img src={imageUrl} alt={title} className="imagenList"/>
                <h3 className="titleList">{title}</h3>
                
            </div>
        
    )
}

export default Item;