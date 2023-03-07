import React from "react";
import { useEffect, useState } from "react";
import  solicitarPeliculas  from '../../app/api';
import Item from "../Item/Item";
import './listContainer.css';

const ListContainer = () => {
    const [peliculas, setPeliculas] = useState([]);
    const pathImagenes = "https://image.tmdb.org/t/p/w500"

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=4dc8443801938005a237c26a3db16dca&language=en-US&page=1')
        .then(response => response.json()).then(data =>{ setPeliculas(data); console.log(peliculas);});    
    },[]);

    return (
            <div className="container-general list-container">
                {

                    peliculas.length != 0 ? peliculas.results.map((pelicula) => {
                        console.log(pelicula);
                        return (<Item title={pelicula.title} imageUrl={pathImagenes+pelicula.poster_path}></Item>)

                    }) : <h1>Cargando...</h1>                 
                }
            </div>

    )

}


export default ListContainer;
