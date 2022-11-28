import ActorCard from "../../components/ActorsCard"


function Actors({movies}) {
    const actorSet = movies.reduce((actors, movie) => {
      movie.cast.forEach((actor) => {
        if (!actors.includes(actor)) actors.push(actor)
      })
      return actors
    }, [])

    return ( 
        <div className="actors-page">
            <h1>Actors</h1>
            {actorSet.map((actor) => {
                return <ActorCard actor={actor}/>
                }
            )}
        </div>
     );
}

export default Actors;