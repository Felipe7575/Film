import React from "react";
import { useEffect, useState } from "react";
import  solicitarPeliculas  from '../../app/api';



const Home = () => {
    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=4dc8443801938005a237c26a3db16dca&language=en-US&page=1')
        .then(response => response.json()).then(data =>{ setPeliculas(data); console.log(peliculas);});    
    },[]);
    return (
        <div className="container-general">
            {
                
                 peliculas.length != 0 ? peliculas.results.map((pelicula) => {
                    return (
                        <div className="container-pelicula">
                            <img src={"https://image.tmdb.org/t/p/w500"+pelicula.poster_path} alt={pelicula.title} />
                            <h3>{pelicula.title}</h3>
                            <p>{pelicula.overview}</p>
                        </div>
                    )
                }) : <h1>Cargando...</h1>
                
                 
                 
            }
        </div>
    )
}

export default Home;
