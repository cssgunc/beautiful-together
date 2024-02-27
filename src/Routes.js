import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {LoginForm} from './pages/auth/LoginForm'
import {PetForm} from './pages/PetForm'
import {CatForm} from './pages/CatForm'
import {DogForm} from './pages/DogForm'

export const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/petform" element={<PetForm />} />
                <Route path="/dogform" element={<DogForm />} />
                <Route path="/catform" element={<CatForm />} />
                <Route path="/login" element={<LoginForm />} />
                
            </Routes>
        </Router>
    )
}