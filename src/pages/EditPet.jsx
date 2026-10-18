import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate, useParams } from "react-router"

function EditPet() {
    const [ formData, setFormData ] = useState({
        name:'',
        age:0,
        breed:''
    })

    const { petId } = useParams()

    async function getPet(){
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/pets/${petId}`)
      setFormData(response.data)
    }

    useEffect(()=>{
      getPet()
    },[])
 
    // this is used for redirecting user when he submits the form
    const navigate = useNavigate()

    function handleChange(event){
        setFormData({...formData,[event.target.name]:event.target.value})
    }

    async function handleSubmit(event){
        event.preventDefault()

        const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/pets/${petId}`, formData)


        navigate('/pets/' + response.data._id)

      
    }



  return (
    <div>
      <h1>Update Pet</h1>
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
             <button>Update Pet</button>
        </form>
    </div>
  )
}

export default EditPet