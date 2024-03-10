export const PetSelection = () => {

    return true ? (
        
        <main> {/* side-background for non-mobile users */}
            <div> {/* actual tinder slide, scaled to viewport height */}
                <div></div> {/* bars at top */}
                <div></div> {/* brief pet name & stats */}
                <div></div> {/* container for bottom-row buttons */}
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