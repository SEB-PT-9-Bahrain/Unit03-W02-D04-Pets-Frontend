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
    <div>PetDetails</div>
  )
}

export default PetDetails