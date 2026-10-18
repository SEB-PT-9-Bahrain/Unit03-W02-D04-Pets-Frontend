import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useParams, useNavigate } from "react-router"


// Exercise 1:
// 1. Create a button `Delete Pet`
// 2. Create a function called deletePet() that sends axios DELETE call to api to delete this pet by id
// 3. Add the deletePet as handleClick function for button
function PetDetails() {
    const [ pet, setPet ] = useState(null)

    const {petId} = useParams()
    const navigate = useNavigate()

    async function getPet(){
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/pets/${petId}`)
        setPet(response.data)
    }

    async function deletePet(){
        const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/pets/${petId}`)
        navigate('/pets')

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
        <button onClick={()=>{deletePet(pet._id)}}>Delete Pet</button>
        <Link to={`/pets/${pet._id}/edit`}>Edit Pet</Link>
        </> : <p>Loading...</p>}
    </div>
  )
}

export default PetDetails