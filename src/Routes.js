import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Home} from './pages/Home'
import {Login} from './pages/Login'
import {PetForm} from './pages/PetForm'
import {CatForm} from './pages/CatForm'
import {DogForm} from './pages/DogForm'
import {SignUp} from './pages/SignUp'
import {PetSelection} from './pages/PetSelection'
import {PreLogin} from './pages/PreLogin'
import {Survey} from './pages/Survey'
import {Checkout} from './pages/Checkout'

export const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PreLogin />} />
                <Route path="/home" element={<Home />} />
                <Route path="/petform" element={<PetForm />} />
                <Route path="/dogform" element={<DogForm />} />
                <Route path="/catform" element={<CatForm />} />
                <Route path="/petselection" element={<PetSelection />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/survey" element={<Survey />} />
                <Route path='/checkout' element={<Checkout />}></Route>
            </Routes>
        </Router>
    )
}