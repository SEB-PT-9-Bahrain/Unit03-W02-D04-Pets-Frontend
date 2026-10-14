import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useParams } from "react-router"
function PetDetails() {
    const [ pet, setPet ] = useState(null)

    const {petId} = useParams()

    async function getPet(){
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/pets/${petId}`)
        setPet(response.data)
    }

    useEffect(()=>{
        getPet()
    },[])
  return (
    <div>
        <h1>Pet Details</h1>
        {pet ? <>
        <h2>Name: {pet.name}</h2>
        <p>Age: {pet.age}</p>
        <p>Breed: {pet.breed}</p>
        </> : <p>Loading...</p>}
    </div>
  )
}

export default PetDetails