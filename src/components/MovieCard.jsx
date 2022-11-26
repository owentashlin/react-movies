import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard({movies}) {
    return ( 
        <div className="movie-card">
            <h3>Movie Card</h3>
            <h6>Movie Title</h6>
            <h6>movie link</h6>
            <h6>release date</h6>
            <h6>thumbnail</h6>
            <Link to='/movies/:movieName'>Details</Link>
        </div>
     )
}

export default MovieCard;