
const  solicitarPeliculas = (Modo) => {
    switch (Modo) {
        case 0:
            console.log(0);
            return (fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=4dc8443801938005a237c26a3db16dca&language=en-US&page=1')
                    .then(response => response.json()))  
        case 1:
            console.log(1);
            return (fetch('https://api.themoviedb.org/3/movie/popular?api_key=4dc8443801938005a237c26a3db16dca&language=en-US&page=1')
                .then(response => response.json()))  
        case 2:
            console.log(2);
            return (fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=4dc8443801938005a237c26a3db16dca&language=en-US&page=1')
                .then(response => response.json())) 
        case 3:
            console.log(3);
            return (fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=4dc8443801938005a237c26a3db16dca&language=en-US&page=1')
                .then(response => response.json())) 
    }
}

export default solicitarPeliculas;