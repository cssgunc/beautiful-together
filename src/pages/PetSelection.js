export const PetSelection = () => {

    return true ? (
        
        <main className="w-full h-screen bg-background flex justify-center"> {/* side-background for non-mobile users */}
            <div className="h-full w-full max-w-[70vh] bg-white flex flex-col p-4"> {/* actual tinder slide, scaled to viewport height */}
                <div className="flex justify-between"> {/* bars at top */}
                    <div className="flex-grow mx-2 h-full p-1 bg-black"></div>
                    <div className="flex-grow mx-2 h-full p-1 bg-black"></div>
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
                    <button onClick=""><img alt="xbutton"></img></button>
                    <button onClick=""><img alt="infobutton"></img></button>
                    <button onClick=""><img alt="heartbutton"></img></button>
                </div>
            </div>
            <div> {/* gray screen over for info screen (hidden initially) */}
                <div></div> {/* pet info popup */}
            </div>
        </main>

    )
    : (
        <main>
            <img></img> {/* heartbreak pic */}
            <div></div> {/* out of pets text */}
        </main>
    );


    
}