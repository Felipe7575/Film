import React from "react";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import { solicitarPeliculasId } from "../../app/api";
import './FilmDetail.css';

import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';




const FilmDetail = () => {
    const [peliculas, setPeliculas] = useState([]);
    const {filmId=0} = useParams();
    const image = "https://image.tmdb.org/t/p/original"+peliculas.backdrop_path;
    const pathImagenes = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        
        solicitarPeliculasId(filmId).then(data =>{ setPeliculas(data); console.log(data);});
    },[filmId]);

    return (
        <div className="contenedor">
            <div className="contenedor-film-details">
                <div className="contenedor-film-details-img">
                    <img src={pathImagenes+peliculas.poster_path} alt={peliculas.title} className="imagenDetail"/>
                </div>
                <div className="contenedor-film-details-info">
                    <h1 className="filmTitle-detail">{peliculas.title}</h1>
                    <div className="overviewDiv">
                        <h2 className="categorias-detail">overview</h2>
                        <h3 className="filmOverview-detail">{peliculas.overview}</h3>
                        <Typography component="legend">Read only</Typography>
                        <Rating name="half-rating"value={peliculas.vote_average / 2} precision={0.5}  readOnly />
                    </div>
                    
                </div>
            </div>
        
        </div>

    );




}

export default FilmDetail;