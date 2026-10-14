import { useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router'

function CreatePet() {
    const [ formData, setFormData ] = useState({
        name:'',
        age:0,
        breed:''
    })

    function handleChange(event){
        setFormData({...formData,[event.target.name]:event.target.value})
    }
    async function handleSubmit(event){
        event.preventDefault()
    }
  return (
    <div>CreatePet</div>
  )
}

export default CreatePet