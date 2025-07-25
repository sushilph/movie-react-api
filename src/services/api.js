// fetch is a function you can use to send a network request
// ${BASE_URL}----> IS A VARIABLE


const API_KEY ="7f4fe35be029d7fc8697b2c67dc59ef0";
const BASE_URL = "https://api.allorigins.win/raw?url=https://api.themoviedb.org/3";
// const BASE_URL = "https://api.themoviedb.org/3";
// const BASE_URL ="https://themoviedb.org/3"

export const getPopularMovies =async () =>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchMovies =async (query) =>{
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};
