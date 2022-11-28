import './App.css';
import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'

import NavBar from '../../components/NavBar'
import LoginPage from '../../components/LoginPage'
import Movies from './MoviesListPage'
import Actors from './ActorsListPage'
import {movies} from "../../data.js"
import MovieDetail from './MovieDetailPage';



function App() {

const [user, setUser] = useState(null)

return (
    <main className="App">
      {user ? (
        <div>
        <NavBar user={user} />
        <Routes>
          <Route path='/' element={<Movies movies={movies}/>}/>
          <Route path='/actors' element={<Actors movies={movies}/>}/>
          <Route path={'/movies/:title'} element={<MovieDetail movies={movies}/>}/>
        </Routes>
        </div>
        ) : (
      <LoginPage user={user} setUser={setUser} />
        )}
    </main>
)
}



export default App;



