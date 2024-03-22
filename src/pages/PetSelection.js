import Pet from '../Pet.js';
//Example Pets
const fido = new Pet('1', 'Fido', 'Friendly and playful', 'Dog', 'Labrador', 'Male', 2, 30, 'Black', 'Active', 'Not Tested', true, false, false, true, 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Labrador_on_Quantock_%282175262184%29.jpg/800px-Labrador_on_Quantock_%282175262184%29.jpg');
const spot = new Pet('2', 'Spot', 'Energetic and friendly', 'Dog', 'Dalmatian', 'Female', 3, 35, 'White with black spots', 'Energetic', 'Compatible', true, true, false, true, 'https://cdn.britannica.com/47/236047-050-F06BFC5E/Dalmatian-dog.jpg');
const max = new Pet('3', 'Max', 'Loyal and friendly', 'Dog', 'Golden Retriever', 'Male', 1, 40, 'Golden', 'Calm', 'Not Compatible', true, true, true, true, 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Golden_Retriever_Dukedestiny01_drvd.jpg/640px-Golden_Retriever_Dukedestiny01_drvd.jpg');
const [notChosen, notChosenFunct] = useState("");
//const notChosen = []
const [chosen, chosenFunct] = useState("");
//const chosen = []
var infoNotClicked = true;
var isTrackPetsNotEmpty = true;

let availablePets = [fido, spot, max];
let trackPets = availablePets;

export const PetSelection = () => {
    const ncFunction = (ncPetIndex) => {
        //notChosen.push(availablePets[0]);
        notChosenFunct([notChosen, availablePets[ncPetIndex]]);
    }
    
    const cFunction = (cPetIndex) => {
        //chosen.push(availablePets[0]);
        chosenFunct([chosen, availablePets[cPetIndex]]);
    }

    const infoFunction = () => {
        //create variable and change it to true
        infoNotClicked = false;
        return infoNotClicked;
    }

    const trackPetsFunc = () => {
        if(trackPets.length<0){
            isTrackPetsNotEmpty = false;
        }
        isTrackPetsNotEmpty = true;

    }
    // replace the "true" with boolean expression for whether there are more dogs left
    return isTrackPetsNotEmpty ? (
        <main className="w-full h-screen bg-background flex justify-center"> {/* side-background for non-mobile users */}
            <div className="h-full w-full max-w-[70vh] bg-white flex flex-col p-4"> {/* actual tinder slide, scaled to viewport height */}
                <div className="flex justify-between"> {/* bars at top */}
                    <div className="flex-grow rounded mx-2 h-full p-1 bg-black"></div>
                    <div className="flex-grow rounded mx-2 h-full p-1 bg-black"></div>
                </div>
                <div className="mt-auto p-4"> {/* brief pet name & stats */}
                    <h1 className="text-themeOrange font-bold text-3xl">Pet Name</h1>
                    <p className="text-themeOrange">
                        <img alt="pet_breed_icon" className="inline mr-2"></img>
                        Pet breed name</p>
                    <p className="text-themeOrange">
                        <img alt="pet_gender_icon" className="inline mr-2"></img>
                        Pet gender</p>
                    <p className="text-themeOrange">
                        <img alt="pet_age_icon" className="inline mr-2"></img>
                        Pet age</p>
                </div>
                <div className="flex justify-between p-4"> {/* container for bottom-row buttons */}
                    <button onClick={(ncFunction(0))} type="button">
                        <img alt="xbutton"></img>
                    </button>
                    <button onClick={(infoFunction)}><img alt="infobutton"></img></button>
                    <button onClick={(cFunction(0))} type="button">
                        <img alt="heartbutton"></img>
                    </button> 
                </div>
            </div>
            {/* gray screen over for info screen (hidden initially, replace true with false to 
                un-hide when info button clicked) */}
            <div className={(infoNotClicked ? ("hidden") : ("")) + " absolute flex justify-center p-4 contentpcenter w-full h-full max-w-[70vh] min-h-max bg-gray-700 bg-opacity-30"}> {/* gray screen over for info screen (hidden initially, un-hide when info button clicked) */}
                <div className="flex flex-col max-w-[60vh] max-h-9/10 bg-white p-4 rounded-sm shadow-lg"> {/* info screen */}
                    <h1 className="text-themeOrange font-bold text-3xl">Pet Name</h1>
                    <p className="text-themeOrange">
                    <img alt="pet_breed_icon" className="inline mr-2"></img>
                    Pet breed name</p>
                    <p className="text-themeOrange">
                        <img alt="pet_gender_icon" className="inline mr-2"></img>
                        Pet gender</p>
                    <p className="text-themeOrange">
                        <img alt="pet_age_icon" className="inline mr-2"></img>
                        Pet age</p>
                    <p className='flex-grow'>
                        Super long info about how incredible of a dog this is
                    </p>
                </div>
            </div>
        </main>

    )
    : (
        <main className="flex flex-col justify-center items-center w-full h-screen bg-themeOrange">
            <img alt="broken_heart" className=""></img> {/* heartbreak pic */}
            <p className="text-center font-bold w-[50vh]">
                We've run out of pets to show at the moment. Please check back in later.
            </p> {/* out of pets text */}
        </main>
    );
    
}
