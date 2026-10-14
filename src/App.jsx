import AllPets from "./pages/AllPets"
import PetDetails from "./pages/PetDetails"
import CreatePet from "./pages/CreatePet"
import EditPet from "./pages/EditPet"
import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router'
import Homepage from "./pages/Homepage"
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/pets" element={<AllPets/>} />
        <Route path="/pets/create" element={<CreatePet/>} />
        <Route path="/pets/:petId" element={<PetDetails/>} />
        <Route path="/pets/:petId/edit" element={<EditPet/>} />
      </Routes>
    </div>
  )
}

export default App