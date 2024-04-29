import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Login} from './pages/Login'
import {PetForm} from './pages/PetForm'
import {CatForm} from './pages/CatForm'
import {DogForm} from './pages/DogForm'
import {SignUp} from './pages/SignUp'
import {PetSelection} from './pages/PetSelection'
import {Survey} from './pages/Survey'


export const RoutesApp = (props) => {
    //Saves user and passes user information as Props or passes Null depending on if user is logged in.
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login saveUser={props.saveUser}/>} />
                <Route path="/petform" element={<PetForm saveUser={props.saveUser}/>} />
                <Route path="/dogform" element={<DogForm saveUser={props.saveUser}/>} />
                <Route path="/catform" element={<CatForm saveUser={props.saveUser}/>} />
                <Route path="/petselection" element={<PetSelection saveUser={props.saveUser}/>} />
                <Route path="/login" element={<Login saveUser={props.saveUser}/>} />
                <Route path="/signup" element={<SignUp saveUser={props.saveUser}/>} />
                <Route path="/survey" element={<Survey saveUser={props.saveUser}/>} />
            </Routes>
        </Router>
    )
}