import './App.css';
import {useState} from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from '../../components/NavBar'
import LoginPage from '../../components/LoginPage'
import Movies from './MoviesListPage';


function App() {

const [user, setUser] = useState(null)

return (
    <div className="App">
      {user ? (
    <>
    <NavBar />
    <h1>main page</h1>
    <Movies />
      {/* <Routes>
        <Route path='/movies' element={<Movies />} />
      </Routes> */}
  </>
) : (
  <LoginPage user={user} setUser={setUser}/>
)}
</div>
)
}



export default App;



