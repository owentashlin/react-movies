import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard({title, releaseDate, posterPath}) {
    return ( 
        <div className="movie-card">
            <img src={posterPath}></img>
            <ul class='movie-card-text'>
                <li>{title}</li>
                <li>released:{releaseDate}</li>
                <Link to='/movies/:movieName'>Details</Link>
            </ul>
        </div>
     )
}

export default MovieCard;