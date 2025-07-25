// NOTE:WE USE COMPONENT INSIDE PAGE TO MAKE VISIBLE TO WINDOW

import MovieCard from "../components/MovieCard"
import { useState ,useEffect} from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css"

// .map use to render dynamically
//  useEffect allows you to add side effects to your function OR to your components and define when they should run

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] =useState(null);
    const [loading, setLoading] =useState(true)

    useEffect(()=> {
        const loadPopularMovies =async ()=>{
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            
            } catch (err) {
                console.log(err)
                setError("Failed to load movies")
            }
            finally {
                setLoading(false)
            }
        };

        loadPopularMovies()
    },[]);

    // const movies =[
    //    {id:1, title:"John Wick", release_date:"2020"}, 
    //    {id:2, title:"Terminator", release_date:"2010"} ,
    //    {id:3, title:"The Matrix", release_date:"2005"} ,
    // //    {id:4, title:"John Wick", release_date:"2020"} ,
    // ];
    const handleSearch = async (e)=>{
         e.preventDefault();
         if (!searchQuery.trim()) return 
         if (loading) return

         setLoading(true)
         try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)

         } catch (err) {
            console.log(err)
            setError("Failed to search movies...")

         } finally {
            setLoading(false)
         }
          };
        // if you want empty search box setSearchQuery("");
        // // above the hold the type thing in search box
        // alert(searchQuery)
        // // setSearchQuery("submit yo basxa search box ma")
        // setSearchQuery("")

   
    return (<div className="home"> 
            <form onSubmit={handleSearch} className="search-form">
                <input type="text"
                  placeholder="Search for movie.."
                   className="search-input"
                   value={searchQuery}
                   //    value={searchQuery} Yo line ma searchQuery matra vayere search box ma kehi type garda dekhdaina i.e update hudaina
                   onChange = {(e) => setSearchQuery(e.target.value)}
                //    above line ley update garxa setSearchQuery or search box ma type vako
                

                   />
                <button type="submit" className="search-button"> Search</button>

            </form>

            {error && <div className="error-message" > {error} </div>}

            {/* aba conditional rendering */}
            {loading ? (<div className="loading"> Loading...</div>) : (<div className="movies-grid"> 
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
               )) } 
                </div>
             ) };


            {/* // <div className="movies-grid">
            //     {movies.map((movie) => ( */}
            {/* //         <MovieCard movie={movie} key={movie.id} />
            //         // movie.title.toLowerCase().startsWith(searchQuery) &&
            //         // above comment to show the match search movie from list
            //    ) )} */}

            {/* {movies.map((movie)=> (
                <MovieCard movie={movie} key={movie.id}/>
                ))} */}
                {/* aba title of movie match garau ney below line ma */}
        </div>
    );   
}
export default Home;