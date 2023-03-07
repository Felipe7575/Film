
const  solicitarPeliculas = () => {
    return (fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=4dc8443801938005a237c26a3db16dca&language=en-US&page=1')
        .then(response => response.json()));
}

export default solicitarPeliculas;