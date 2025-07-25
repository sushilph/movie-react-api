// we make function
//  we accept movie here dynamically 
// NOTE: className is reserved keyword to declare class
// CONTEXT--> a context will allow state to be globally available to anything that's within the provided context

import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"

function MovieCard ({movie}){
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

     function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

  

    return <div className="movie-card">
        {/* ANOTHER DIV WHICH CAN STORE IMAGES */}
        <div className="movie-poster">

            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            {/* IN ABOVE LINE WE USE {} BRACES TO PASS VARIABLE DYNAMICALLY */}
            <div className="movie-overlay">
                <button className={`favorite-btn" ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
        
                    🤍
                </button>
            </div>
        </div>

        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>

        </div>
    </div>

}

export default MovieCard