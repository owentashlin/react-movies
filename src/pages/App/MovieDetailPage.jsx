import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = ({movies, posterPath}) => {
  const {title} = useParams();

  return (
      <div className="detail-page">
          {
            movies
              .filter((movie) => movie.title === title)
              .map((movie) => (
                <div className="full-card" key={movie.title}>
                  <h2>Title: {movie.title}</h2>
                  <h4>Realeased: {movie.releaseDate}</h4>
                  <h3>Cast Members: {movie.cast}</h3>
                  <img src={posterPath}></img>
                </div>
              ))}
        </div>
  )
}

export default MovieDetail
