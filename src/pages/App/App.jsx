import './App.css';
import {useState} from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from '../../components/NavBar'
import LoginPage from '../../components/LoginPage'
import Movies from './MoviesListPage'
import { movies } from "../../data.js"


function App() {

const [user, setUser] = useState(null)

return (
    <div className="App">
      {user ? (
    <>
    <NavBar user={user}/>
    <Movies movies={movies}/>
    
    </>
  ) : (
  <LoginPage user={user} setUser={setUser}/>
)}
</div>
)
}



export default App;



