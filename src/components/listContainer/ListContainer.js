import React from "react";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import Item from "../Item/Item";
import './listContainer.css';


import  {solicitarPeliculas}  from '../../app/api';

const ListContainer = () => {
    const [peliculas, setPeliculas] = useState([]);
    const {catId=0} = useParams();
    const pathImagenes = "https://image.tmdb.org/t/p/w500"

    useEffect(() => {
            const cat = parseInt(catId);
            solicitarPeliculas(cat).then(data =>{ setPeliculas(data);});    
            
    },[catId]);


   

    return (
            <div className="container-general list-container">
                {
                    
                    peliculas.length != 0 ? peliculas.results.map((pelicula) => {                      
                        return (<Item key={pelicula.title} id={pelicula.id} title={pelicula.title} imageUrl={pathImagenes+pelicula.poster_path}></Item>)
                    }) : <h1>Cargando...</h1>                 
                }
            </div>

    )

}


export default ListContainer;
