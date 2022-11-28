import React from 'react'

function getNum(min, max) {
    return Math.round(Math.random()*(min-max)+min)
}

function ActorCard({actor}) {
    let picNum = getNum(100, 400)
    return ( 
        <div className="movie-card">
            <img src={`https://picsum.photos/300/400/?${picNum}`}></img>
            <h3>{actor}</h3>
        </div>
     )
}

export default ActorCard;