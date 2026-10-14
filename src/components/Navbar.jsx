import React from 'react'
import { Link } from 'react-router'
// Create Navbar
// You know what to do
function Navbar() {
  return (
    <div>
        <Link to='/'>Homepage</Link>
        <Link to='/pets'>All Pets</Link>
        <Link to='/pets/create'>Create a Pet</Link>
    </div>
  )
}

export default Navbar