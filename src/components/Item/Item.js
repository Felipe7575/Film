import React from "react";
import './Item.css';

const Item = ({title , imageUrl}) => {
    return (
        
            <div className="item-pelicula">
                <img src={imageUrl} alt={title} className="imagenList"/>
                <h3 className="titleList">{title}</h3>
                
            </div>
        
    )
}

export default Item;