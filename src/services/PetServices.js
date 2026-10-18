import axios from "axios"

const BASE_URL = import.meta.env.VITE_BACKEND_URL
async function fetchAllPets(){
    const response = await axios.get(`${BASE_URL}/pets`)
    return response.data
}

async function fetchOnePet(petId){
    const response = await axios.get(`${BASE_URL}/pets/${petId}`)
    return response.data

}

async function createNewPet(newPetBody){
    const response = await axios.post(`${BASE_URL}/pets`,newPetBody)
    return response.data
}

async function updatePet(petId, petBody){
    const response = await axios.put(`${BASE_URL}/pets/${petId}`,petBody)
    return response.data
}

async function deletePet(petId){
    const response = await axios.delete(`${BASE_URL}/pets/${petId}`)
    return response.data
}

export {
    createNewPet,
    fetchAllPets,
    fetchOnePet,
    updatePet,
    deletePet
}