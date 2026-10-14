import axios from "axios"

const BASE_URL = import.meta.env.VITE_BACKEND_URL
async function fetchAllPets(){
    const response = await axios.get(`${BASE_URL}/pets`)
    return response.data
}

function fetchOnePet(){}

async function createNewPet(newPetBody){
    const response = await axios.post(`${BASE_URL}/pets`,newPetBody)
    return response.data
}

function updatePet(){}

function deletePet(){}

export {
    createNewPet,
    fetchAllPets,
    fetchOnePet,
    updatePet,
    deletePet
}