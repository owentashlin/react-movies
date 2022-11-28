import React from 'react'
import {useParams} from 'react-router-dom'

const MovieDetail = ({movies}) => {
  const {title} = useParams()

  return (
      <div className="detail-page">
          {movies.filter((movie) => movie.title === title)
              .map((movie) => (
                <div>
                  <img src={movie.posterPath}></img>
                  <h2>{movie.title}</h2>
                  <h4>Realeased: {movie.releaseDate}</h4>
                  <h3>Cast:</h3>
                    <ul>
                      {movie.cast.map(actor => {
                        return <li>{actor}</li>
                      })}
                    </ul>
                </div>
              ))}
        </div>
  )
}

export default MovieDetail
