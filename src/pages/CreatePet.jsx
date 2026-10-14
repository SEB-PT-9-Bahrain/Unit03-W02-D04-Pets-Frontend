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
    <div>
        <h1>Create Pet</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input 
            type="text" 
            name="name"
            id="name"
            onChange={handleChange}
            value={formData.name}
            />

            <label htmlFor="age">Age:</label>
            <input 
            type="text"
            name="age"
            id="age"
            onChange={handleChange}
            value={formData.age}
             />

            <label htmlFor="breed">Breed:</label>
            <input 
            type="text"
            name="breed"
            id="breed"
            onChange={handleChange}
            value={formData.breed}
             />
             <button>Create Pet</button>
        </form>
    </div>
  )
}

export default CreatePet