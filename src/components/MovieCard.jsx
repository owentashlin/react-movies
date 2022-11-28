import React from 'react'
import {Link} from 'react-router-dom'

function MovieCard({title, releaseDate, posterPath}) {

    return ( 
        <div className="movie-card" >
                <Link to='/movies/:title'><img src={posterPath}></img></Link>
            <ul className='movie-card-text'>
                <li><strong>{title}</strong></li>
                <li>released:{releaseDate}</li>
            </ul>
        </div>
     )
}

export default MovieCard;