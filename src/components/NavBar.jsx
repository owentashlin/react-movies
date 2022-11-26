import React from 'react'
import { Link } from 'react-router-dom'

function NavBar ({user}) {
  return (
    <>
    <nav className='NavBar'>
        <h4>Welcome {user}</h4>
      <Link to='/'>All Movies</Link>
      <br></br>
      <Link to='/actors'>Actors</Link>
      <hr></hr>
    </nav>
    </>
  )
}

export default NavBar