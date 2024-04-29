import Pet from '../Pet.js';
import { useEffect, useState } from 'react';

// icons from https://www.svgrepo.com/collection/phosphor-filled-icons/ under MIT liscence
import cakeIcon from './icons/cake-fill-svgrepo-com.svg'
import dogIcon from './icons/dog-fill-svgrepo-com.svg'
import catIcon from './icons/cat-fill-svgrepo-com.svg'
import maleIcon from './icons/gender-male-fill-svgrepo-com.svg'
import femaleIcon from './icons/gender-female-fill-svgrepo-com.svg'
import plusIcon from './icons/plus-circle-fill-svgrepo-com.svg'
import minusIcon from './icons/minus-circle-fill-svgrepo-com.svg'
import infoIcon from './icons/info-fill-svgrepo-com.svg'
import clockIcon from './icons/clock-fill-svgrepo-com.svg'
import { render } from '@testing-library/react';

//Example Pets
const fido = new Pet('1', 'Fido', 'Friendly and playful', 'Dog', 'Labrador', 'Male', 2, 30, 'Black', 'Active', false, true, false, false, true, ['https://wallpapershome.com/images/pages/pic_v/16641.jpg']);
const spot = new Pet('2', 'Spot', 'Energetic and friendly', 'Dog', 'Dalmatian', 'Female', 3, 35, 'White with black spots', 'Energetic', true, true, true, false, true, ['https://cdn.britannica.com/47/236047-050-F06BFC5E/Dalmatian-dog.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Golden_Retriever_Dukedestiny01_drvd.jpg/640px-Golden_Retriever_Dukedestiny01_drvd.jpg', 'https://wallpapershome.com/images/pages/pic_v/16641.jpg']);
const max = new Pet('3', 'Max', 'Loyal and friendly', 'Dog', 'Golden Retriever', 'Male', 1, 40, 'Golden', 'Calm', false, true, true, true, true, ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Golden_Retriever_Dukedestiny01_drvd.jpg/640px-Golden_Retriever_Dukedestiny01_drvd.jpg']);

//const chosen = []

// let availablePets = [fido, spot, max];
// let trackPets = availablePets;

export const PetSelection = (props) => {
    
    const[trackInfoClicked, setTrackInfoClicked] = useState(false);
    const[isTrackPetsNotEmpty, setIsTrackPetsNotEmpty] = useState(true);
    const[currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const[availablePets, setAvailablePets] = useState([fido, spot, max]);
    const[petIndex, setPetIndex] = useState(availablePets.length - 1);
    const[currentPet, setCurrentPet] = useState(availablePets[petIndex]);

    const[chosenPets, setChosenPets] = useState([]);
    const[rejectedPets, setRejectedPets] = useState([]);



    function rejectionFunction() {
        setRejectedPets(prevState => [...prevState, currentPet]);
        if (petIndex - 1 >= 0) {
            setCurrentPet(availablePets[petIndex-1]);
        } else {
            setIsTrackPetsNotEmpty(false);
        }
        setCurrentPhotoIndex(0);
        setPetIndex(petIndex - 1);
    }

    function chosenFunction() {
        setChosenPets(prevState => [...prevState, currentPet]);
        if (petIndex - 1 >= 0) {
            setCurrentPet(availablePets[petIndex-1]);
        } else {
            setIsTrackPetsNotEmpty(false);
        }
        setPetIndex(petIndex - 1);
        setCurrentPhotoIndex(0);
    }
    
    function renderDivs(index = 0) {
        let bars = [];
        let pets = currentPet.images.length;
        for (let i = 0; i < pets; i++) {
            bars.push(<div className={"flex-grow rounded mx-2 h-full p-1 bg-white" + (i === index ? " bg-opacity-100" : " bg-opacity-60") + " shadow-sm"}></div>);
        }
        return (bars)
    }

    // For making the transition between the photos make sure to use the renderDivs function with the index you are changing to

    function movePhotoLeft() {
        if (currentPhotoIndex  > 0) {
            setCurrentPhotoIndex(currentPhotoIndex - 1);
        }
    }

    function movePhotoRight() {
        if (currentPhotoIndex < currentPet.images.length - 1) {
            setCurrentPhotoIndex(currentPhotoIndex + 1);
        }
    }
        


    // replace the "true" with boolean expression for whether there are more dogs left
    return isTrackPetsNotEmpty ? (
        <main className="w-full h-screen bg-gradient-to-br from-backgroundGreen to-themeOrange bg-opacity-70 flex justify-center items-center shadow-inner"> {/* side-background for non-mobile users */}
            <div className="h-full w-full max-h-fit max-w-[70vh] relative z-0 object-contain shadow-2xl shadow-backgroundGreen/80"> {/* pet image */}
                    <img alt="pet_image" className="object-cover min-w-full min-h-full max-h-full shadow-inner z-10" src={currentPet.images[currentPhotoIndex]}></img>
    

                <div className="absolute inset-0 h-full w-full max-w-[70vh] bg-transparent flex flex-col z-50 p-4"> {/* actual tinder slide, scaled to viewport height */}
                    <div className="flex justify-between"> {/* bars at top */}
                    {renderDivs(currentPhotoIndex)}
                    </div>
                    <div className="mt-auto p-4"> {/* brief pet name & stats */}
                        <h1 className="text-white font-bold text-3xl">{currentPet.name}</h1>
                    <div className='flex flex-row absolute inset-0 justify-between align-middle h-full w-full'>
                        <button onClick={() => movePhotoLeft()} className="bg-transparent hover:bg-gradient-to-l from-transparent to-white/15 h-full w-12 z-20" type='button'></button>
                        <button onClick={() => movePhotoRight()} className="bg-transparent hover:bg-gradient-to-r from-transparent to-white/15 h-full w-12 z-20" type='button'></button>
                    </div>
                    <p className="text-white">
                        <img alt="pet_breed_icon" className="inline mr-2 w-6" src={currentPet.species === "Cat" ? catIcon : dogIcon}></img>
                        <b>{currentPet.breed}</b></p>
                    <p className="text-white">
                        <img alt="pet_gender_icon" className="inline mr-2 w-6" src={currentPet.gender === "Male" ? maleIcon : femaleIcon}></img>
                        <b>{currentPet.gender}</b></p>
                    <p className="text-white">
                        <img alt="pet_age_icon" className="inline mr-2 w-6" src={cakeIcon}></img>
                        <b>{currentPet.age}</b></p>
                </div>
                <div className="flex justify-between p-4 pt-0"> {/* container for bottom-row buttons */}
                    <button onClick={() => rejectionFunction()} type="button" className='z-50'>
                        <img alt="xbutton" className="inline-block w-20 border-white" src={minusIcon}></img>
                    </button>
                    <button onClick={() => setTrackInfoClicked(!trackInfoClicked)} className='z-50'>
                        <img alt="infobutton" className="inline-block w-10" src={infoIcon}></img>
                    </button>
                    <button onClick={() => chosenFunction()} type="button" className='z-50'>
                        <img alt="heartbutton" className="inline-block w-20" src={plusIcon}></img>
                    </button> 
                </div>
                </div>
            </div>
            {/* gray screen over for info screen (hidden initially, replace true with false to 
                un-hide when info button clicked) */}
            <div className={(!trackInfoClicked ? ("hidden") : ("")) + " absolute flex justify-center p-4 contentpcenter w-full h-full max-w-[70vh] min-h-max bg-gray-700 bg-opacity-40"}> {/* gray screen over for info screen (hidden initially, un-hide when info button clicked) */}
                <div className="flex flex-col max-w-[60vh] max-h-9/10 w-full bg-white p-4 rounded-xl shadow-xl"> {/* info screen */}
                    <div className="flex justify-between flex-row min-w-full">
                        <div>
                            <t className="flex text-themeOrange font-bold text-3xl">Pet Info</t>
                        </div>
                        <div>
                            <button onClick={() => setTrackInfoClicked(!trackInfoClicked)} className="flex text-black text-3xl">X</button>
                        </div>
                    </div>
                    <p className='flex-grow'>
                        {currentPet.description}
                    </p>
                    <p className="flex-grow">
                        <img alt="pet_breed_icon" className="inline mr-2 w-6" src={currentPet.species === "Cat" ? catIcon : dogIcon}></img>
                    {currentPet.breed}
                    </p>
                    <p className="flex-grow">
                        <img alt="pet_gender_icon" className="inline mr-2 w-6" src={currentPet.gender === "Male" ? maleIcon : femaleIcon}></img>
                        {currentPet.gender}
                        </p>
                    <p className="flex-grow">
                        <img alt="pet_age_icon" className="inline mr-2 w-6" src={cakeIcon}></img>
                        {currentPet.age}
                        </p>
                    <p className='flex-grow'>
                        {currentPet.personality}
                    </p>
                    <p className='flex-grow'>
                        {currentPet.kidCompatible ? 'Kid Compatible' : 'Not Kid Compatible'}
                    </p>
                    <p className='flex-grow'>
                        {currentPet.dogCompatible ? 'Dog Compatible' : 'Not Dog Compatible'}
                    </p>
                    <p className='flex-grow'>
                        {currentPet.catCompatible ? 'Cat Compatible' : 'Not Cat Compatible'}
                    </p>
                    <p className='flex-grow'>
                        {currentPet.livestockCompatible ? 'Livestock Compatible' : 'Not Livestock Compatible'}
                    </p>
                    <p className='flex-grow'>
                        {currentPet.trained ? 'Trained' : 'Not Formally Trained'}
                    </p>
                </div>
            </div>
        </main>

    )
    : (
        <main className="flex flex-col justify-center items-center w-full h-screen min-w-full min-h-full bg-themeOrange">
            <img alt="broken_heart" className="w-40" src={clockIcon}></img> {/* heartbreak pic */}
            <p className="text-center font-bold w-[50vh] text-white">
                We've run out of pets to show at the moment. Please check back in later.
            </p> {/* out of pets text */}
        </main>
    );
    
}
