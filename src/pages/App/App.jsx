import './App.css';
import {useState} from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from '../../components/NavBar'
import LoginPage from '../../components/LoginPage'
import Movies from './MoviesListPage'
import Actors from './ActorsListPage'
import { movies } from "../../data.js"


function App() {

const [user, setUser] = useState(null)

return (
    <main className="App">
      {user ? (
        <div>
        <NavBar user={user} />
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/actors' element={<Actors />} />
        </Routes>
        </div>
        ) : (
      <LoginPage user={user} setUser={setUser} />
        )}
    </main>
)
}



export default App;



