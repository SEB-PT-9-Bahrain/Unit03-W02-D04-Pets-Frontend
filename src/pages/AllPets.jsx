import { useState, useEffect } from "react"
import axios from 'axios'
import { fetchAllPets } from "../services/PetServices"
import { Link } from "react-router"
function AllPets() {
    const [ pets, setPets ] = useState([])

    async function getAllPets(){
        const response = await fetchAllPets()
        setPets(response)
    }

    useEffect(()=>{
        getAllPets()
    },[])
  return (
    <div>
        <h1>All Pets</h1>

        {pets.map((onePet)=> 
        <div key={onePet._id}>
            <h2>Name: {onePet.name}</h2>
            <Link to={`/pets/${onePet._id}`}>See Pet Details</Link>
        </div>
        )}
    </div>
  )
}

export default AllPets