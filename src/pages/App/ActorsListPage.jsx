import ActorCard from "../../components/ActorsCard"
import {movies} from "../../data"

function Actors({cast}) {
    const actorSet = new Set(movies.map(obj => obj.cast))

    return ( 
        <div className="actors-page">
        <h1>Actors</h1>
        <ActorCard movies={movies} cast={actorSet}/>
        </div>
     );
}

export default Actors;