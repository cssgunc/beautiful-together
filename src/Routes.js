import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Login} from './pages/Login'
import {PetForm} from './pages/PetForm'

export const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/petform" element={<PetForm />} />
            </Routes>
        </Router>
    )
}