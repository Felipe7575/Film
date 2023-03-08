import React from "react";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import { solicitarPeliculasId } from "../../app/api";
import './FilmDetail.css';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';




const FilmDetail = () => {
    const [peliculas, setPeliculas] = useState([]);
    const {filmId=0} = useParams();
    const image = "https://image.tmdb.org/t/p/original"+peliculas.backdrop_path;
    const pathImagenes = "https://image.tmdb.org/t/p/w500";

    const [value, setValue] = React.useState(0);
   


    useEffect(() => {
        
        solicitarPeliculasId(filmId).then(data =>{ setPeliculas(data); console.log(data);});
    },[filmId]);

    return (
        <div className="">
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


const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];

 
