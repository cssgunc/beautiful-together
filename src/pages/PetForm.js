import React from 'react';
import {useNavigate} from 'react-router-dom';

/* Displays view containing two buttons that reroute to other views. 
 * Button 1 reroutes to DogForm
 * Button 2 reroutes to CatForm
 * 
 * Todo:
 * 1) Simply implementation of two buttons that perform rerouting
 * 2) Decide image(s) for buttons
 * 3) Implement rest of UI
 *
 */
export const PetForm = () => {

    const navigate = useNavigate();
  
    const handleDogFormClick = () => {
        navigate('/DogForm');
    }
    const handleCatFormClick = () => {
        navigate('/CatForm');
    }
    
    return (
        <div>
            <h1>petform</h1>
            
            <button onClick={(handleDogFormClick)} type="button">
                <img src={require('./img/placeholder_asha.jpeg')} alt="" height={200} width={200} />
            </button>
            <button onClick={(handleCatFormClick)} type="button">
                <img src={require('./img/placeholder_barry.jpg')} alt="" height={200} width={200}/>
            </button>

        </div>

    );
}