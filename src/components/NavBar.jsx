import React from 'react'
import { Link } from 'react-router-dom'

function NavBar ({user}) {
  return (
    <>
    <nav className='NavBar'>
        <h4>Welcome {user}</h4>
      <h4>Movies</h4>
      {/* <Link to='./MoviesListPage'></Link> */}
      <h4>Actors</h4>
      <hr></hr>
    </nav>
    </>
  )
}

export default NavBar