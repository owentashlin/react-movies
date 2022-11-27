import ActorCard from "../../components/ActorsCard";
import { movies } from "../../data";

function Actors() {
    return ( 
        <div className="actors-page">
        <h1>Actors</h1>
        <ActorCard movies={movies}/>
        </div>
     );
}

export default Actors;