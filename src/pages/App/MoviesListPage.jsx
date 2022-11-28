import MovieCard from "../../components/MovieCard"
import { movies } from "../../data";

function Movies() {
    
    return ( 
        <div className="movie-page">
        <h1>All Movies</h1>
        {movies.map(movie => 
        <MovieCard movies={movie}
        key={movie.title} releaseDate={movie.releaseDate} title={movie.title} posterPath={movie.posterPath}/>
        )}
        </div>
     );
}

export default Movies