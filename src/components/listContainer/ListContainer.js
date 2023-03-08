import React from "react";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import Item from "../Item/Item";
import './listContainer.css';



import  {solicitarPeliculas,solicitarPeliculasBusqueda}  from '../../app/api';

const ListContainer = () => {
    const [peliculas, setPeliculas] = useState([]);
    const {catId=0} = useParams();
    const {filmTitle=""} = useParams();
    const pathImagenes = "https://image.tmdb.org/t/p/w500"

    useEffect(() => {
        setPeliculas([]);
            console.log("CatId "+catId + " FilmTitle " + filmTitle);
            if (catId != null){
                const cat = parseInt(catId);
                solicitarPeliculas(cat).then(data =>{setPeliculas([]); setPeliculas(data);});  
            }
            if(filmTitle != "")
                solicitarPeliculasBusqueda(filmTitle).then(data =>{setPeliculas([]); setPeliculas(data);});  
            
    },[catId, filmTitle]);


   

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
