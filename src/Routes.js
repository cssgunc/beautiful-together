import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Login} from './pages/Login'
import {PetForm} from './pages/PetForm'
import {CatForm} from './pages/CatForm'
import {DogForm} from './pages/DogForm'
import {PetSelection} from './pages/PetSelection'
import Home from './pages/Home'
import PreLogin from './pages/PreLogin'

export const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/petform" element={<PetForm />} />
                <Route path="/dogform" element={<DogForm />} />
                <Route path="/catform" element={<CatForm />} />
                <Route path="/petselection" element={<PetSelection />} />
                <Route path= "/prelogin" element ={<PreLogin />} />
            </Routes>
        </Router>
    )
}