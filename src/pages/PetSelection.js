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

//Example Pets
const fido = new Pet('1', 'Fido', 'Friendly and playful', 'Dog', 'Labrador', 'Male', 2, 30, 'Black', 'Active', false, true, false, false, true, 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Labrador_on_Quantock_%282175262184%29.jpg/800px-Labrador_on_Quantock_%282175262184%29.jpg');
const spot = new Pet('2', 'Spot', 'Energetic and friendly', 'Dog', 'Dalmatian', 'Female', 3, 35, 'White with black spots', 'Energetic', true, true, true, false, true, 'https://cdn.britannica.com/47/236047-050-F06BFC5E/Dalmatian-dog.jpg');
const max = new Pet('3', 'Max', 'Loyal and friendly', 'Dog', 'Golden Retriever', 'Male', 1, 40, 'Golden', 'Calm', false, true, true, true, true, 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Golden_Retriever_Dukedestiny01_drvd.jpg/640px-Golden_Retriever_Dukedestiny01_drvd.jpg');

//const chosen = []

// let availablePets = [fido, spot, max];
// let trackPets = availablePets;

export const PetSelection = () => {
    
    const[trackInfoClicked, setTrackInfoClicked] = useState(false);
    const[isTrackPetsNotEmpty, setIsTrackPetsNotEmpty] = useState(true);

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
            setCurrentPet(null);
            setIsTrackPetsNotEmpty(false);
        }
        setPetIndex(petIndex - 1);
    }

    function chosenFunction() {
        setChosenPets(prevState => [...prevState, currentPet]);
        if (petIndex - 1 >= 0) {
            setCurrentPet(availablePets[petIndex-1]);
        } else {
            setCurrentPet(null);
            setIsTrackPetsNotEmpty(false);
        }
        setPetIndex(petIndex - 1);
    }

    // const ncFunction = (ncPetIndex) => {
    //     notChosenFunct(prevState => [...prevState, availablePets[ncPetIndex]]);
    // }
    
    // const cFunction = (cPetIndex) => {
    //     chosenFunct(prevState => [...prevState, availablePets[cPetIndex]]);
    // }

    // const infoFunction = () => {
    //     //create variable and change it to true
    //     infoNotClicked = false;
    //     return infoNotClicked;
    // }

    // const trackPetsFunc = () => {
    //     if(trackPets.length<0){
    //         isTrackPetsNotEmpty = false;
    //     }
    //     isTrackPetsNotEmpty = true;
    
    function renderDivs() {
        let bars = [];
        let pets = availablePets.length;
        let index = chosenPets.length + rejectedPets.length;
        for (let i = 0; i < pets; i++) {
            // bars.push(<div className={"flex-grow rounded mx-2 h-full p-1 bg-" + (i == petIndex ? "white" : "passiveGreen") + " bg-opacity-80 shadow-sm shadow-" + (i == petIndex ? "white" : "backgroundGreen")}></div>);
            bars.push(<div className={"flex-grow rounded mx-2 h-full p-1 bg-passiveGreen " + (i == index ? "bg-opacity-20" : "") + " shadow-sm shadow-backgroundGreen"}></div>);
        }
        return (bars)
        // return (<div className="flex-grow rounded mx-2 h-full p-1 bg-passiveGreen bg-opacity-80 shadow-sm shadow-backgroundGreen"></div>);
    }

    // replace the "true" with boolean expression for whether there are more dogs left
    return isTrackPetsNotEmpty ? (
        <main className="w-full h-screen bg-backgroundGreen bg-opacity-80 flex justify-center"> {/* side-background for non-mobile users */}
            <div className="h-full w-full max-w-[70vh] bg-background flex flex-col p-4"> {/* actual tinder slide, scaled to viewport height */}
                <div className="flex justify-between"> {/* bars at top */}
                    {renderDivs()}
                </div>
                <div className="flex-grow bg-themeOrange bg-opacity-85 p-3 m-2 rounded-lg shadow-md shadow-orange-200"> {/* pet image */}
                    <img alt="pet_image" className="object-cover w-full h-full rounded-md shadow-sm shadow-black" src={currentPet.image}></img>
                </div>
                <div className="mt-auto p-4"> {/* brief pet name & stats */}
                    <h1 className="text-themeOrange font-bold text-3xl">{currentPet.name}</h1>
                    <p className="text-themeOrange">
                        <img alt="pet_breed_icon" className="inline mr-2 w-6" src={currentPet.species === "Cat" ? catIcon : dogIcon}></img>
                        <b>{currentPet.breed}</b></p>
                    <p className="text-themeOrange">
                        <img alt="pet_gender_icon" className="inline mr-2 w-6" src={currentPet.gender === "Male" ? maleIcon : femaleIcon}></img>
                        <b>{currentPet.gender}</b></p>
                    <p className="text-themeOrange">
                        <img alt="pet_age_icon" className="inline mr-2 w-6" src={cakeIcon}></img>
                        <b>{currentPet.age}</b></p>
                </div>
                <div className="flex justify-between p-4 pt-0"> {/* container for bottom-row buttons */}
                    <button onClick={rejectionFunction} type="button">
                        <img alt="xbutton" className="inline-block w-20" src={minusIcon}></img>
                    </button>
                    <button onClick={() => setTrackInfoClicked(!trackInfoClicked)}>
                        <img alt="infobutton" className="inline-block w-10" src={infoIcon}></img>
                    </button>
                    <button onClick={() => chosenFunction()} type="button">
                        <img alt="heartbutton" className="inline-block w-20" src={plusIcon}></img>
                    </button> 
                </div>
            </div>
            {/* gray screen over for info screen (hidden initially, replace true with false to 
                un-hide when info button clicked) */}
            <div className={(!trackInfoClicked ? ("hidden") : ("")) + " absolute flex justify-center p-4 contentpcenter w-full h-full max-w-[70vh] min-h-max bg-gray-700 bg-opacity-40"}> {/* gray screen over for info screen (hidden initially, un-hide when info button clicked) */}
                <div className="flex flex-col max-w-[60vh] max-h-9/10 w-full bg-background p-4 rounded-sm shadow-xl border-backgroundGreen border-8"> {/* info screen */}
                    <h1 className=" text-background font-bold text-3xl self-center bg-themeOrange px-4 rounded-md shadow-sm mb-2">{currentPet.name}</h1>
                    <p className="flex-grow text-themeOrange">
                        <img alt="pet_breed_icon" className="inline mr-2 w-6" src={currentPet.species === "Cat" ? catIcon : dogIcon}></img>
                    <b>{currentPet.breed}</b>
                    </p>
                    <p className="flex-grow text-themeOrange">
                        <img alt="pet_gender_icon" className="inline mr-2 w-6" src={currentPet.gender === "Male" ? maleIcon : femaleIcon}></img>
                        <b>{currentPet.gender}</b>
                        </p>
                    <p className="flex-grow text-themeOrange">
                        <img alt="pet_age_icon" className="inline mr-2 w-6" src={cakeIcon}></img>
                        <b>{currentPet.age}</b>
                        </p>
                    <p className='flex-grow text-themeOrange'>
                        <b>{currentPet.description}</b>
                    </p>
                    <p className='flex-grow text-themeOrange'>
                        <b>{currentPet.personality}</b>
                    </p>
                    <p className='flex-grow text-themeOrange'>
                        <b>{currentPet.kidCompatible ? 'Kid Compatible' : 'Not Kid Compatible'}</b>
                    </p>
                    <p className='flex-grow text-themeOrange'>
                        <b>{currentPet.dogCompatible ? 'Dog Compatible' : 'Not Dog Compatible'}</b>
                    </p>
                    <p className='flex-grow text-themeOrange'>
                        <b>{currentPet.catCompatible ? 'Cat Compatible' : 'Not Cat Compatible'}</b>
                    </p>
                    <p className='flex-grow text-themeOrange'>
                        <b>{currentPet.livestockCompatible ? 'Livestock Compatible' : 'Not Livestock Compatible'}</b>
                    </p>
                    <p className='flex-grow text-themeOrange'>
                        <b>{currentPet.trained ? 'Trained' : 'Not Formally Trained'}</b>
                    </p>
                    <button onClick={() => setTrackInfoClicked(!trackInfoClicked)} className="bg-themeOrange text-white rounded-md p-2 shadow-md">Close</button>
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
