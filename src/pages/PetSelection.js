import { useState } from 'react';
import { db } from '../firebase-config.js';
import { collection, getDocs, query } from 'firebase/firestore';
import './PetSelection.css';

export const PetSelection = () => {
    // TODO: Update frontend; Frontend is currently a mockup for ensuring functions work.
    const catRef = "cats";
    const dogRef = "dogs";
    const catDetails = [
        "id",
        "Breed",
        "Status",
    ];

    const [pets, setPets] = useState([]);
    const [prevCatIds, setPrevCatIds] = useState([]);
    const [prevDogIds, setPrevDogIds] = useState([]);
    const [petLength, setPetLength] = useState(0);
    const [petIndex, setPetIndex] = useState(0);

    const [page1Info, setPage1Info] = useState("loading");
    const [page2Info, setPage2Info] = useState("loading");
    const pageMap = {page1: setPage1Info, page2: setPage2Info};

    const [petsLoaded, setPetsLoaded] = useState(false);

    async function loadPets() {
        // TODO: add pet form parameters to the catQuery
        // Note: the 'in prevCatIds' parameter cannot be added to catQuery due to the array size limit of 30
        /*
        const catQuery = query(collection(db, catRef));
        const catDocs = await getDocs(catQuery);
        */
        const catDocs = await getDocs(collection(db, catRef));
        let cats = [];
        let catIds = [];

        catDocs.forEach((doc) => {
            /** 
            // To prevent showing a pet that has already been swiped on. 
            if (doc.id not in prevCatIds) {
                newCat = {};
                // Assumes that the cat document contains every field listed in catDetails
                for (const detail in catDetails) {
                    newCat[detail] = doc.get(detail);
                }
                //...
            }
            */
            cats = [...cats, { 
                id: doc.id,
                Breed: doc.get("Breed"), 
                Status: doc.get("Status")
            }];
            catIds = [...catIds, doc.id];
        });

        setPets(cats);
        setPrevCatIds([...prevCatIds, catIds]);

        
        // TODO: add pet form parameters to the dogQuery
        const dogQuery = query(collection(db, dogRef));
        const dogDocs = await getDocs(dogQuery);
        let dogs = [];
        let dogIds = [];
        //TODO: Add dogDocs once fields become more consistent.
        //TODO: Determine how to mix cat and dog profiles when necessary (alternating? random?)

        setPetLength(cats.length + dogs.length);
        setPetIndex(cats.length + dogs.length - 1);
        setPetsLoaded(true);

        if (cats.length + dogs.length === 0) {
            var leftButton = document.getElementById("page1left");
            var rightButton = document.getElementById("page1right");
            leftButton.disabled = true;
            rightButton.disabled = true;
        }
    }

    function updatePetElement(id, index) {
        setPetIndex(index - 1);
        const setPage = pageMap[id];
        if (index >= 0) {
            const pet = pets[index];
            let petInfo = "";
            for (let i = 0; i < catDetails.length; i++) {
                const field = catDetails[i];
                petInfo += field + ": " + pet[field] + "\n";
            }
            setPage(petInfo);
        } else {
            setPage("No Pets Remaining");
        }
    }

    if (!petsLoaded) {
        loadPets();
    } else if (page1Info === "loading") {
        updatePetElement("page1", 0);
        updatePetElement("page2", 1);
    }

    const swipe = (side, oldId, newId) => {
        var oldElement = document.getElementById(oldId);
        var newElement = document.getElementById(newId);
        oldElement.classList.add("swipe" + side);
        newElement.classList.remove("background");

        // To ensure the first background page has disabled buttons; adding 'disabled' to the button's html makes it irremovable.
        var newLeft = document.getElementById(newId + "left");
        var newRight = document.getElementById(newId + "right");
        newLeft.disabled = true;
        newRight.disabled = true;

        var oldLeft = document.getElementById(oldId + "left");
        var oldRight = document.getElementById(oldId + "right");
        oldLeft.disabled = true;
        oldRight.disabled = true;

        setTimeout(() => hide(oldId), 750);
        setTimeout(() => updatePetElement(oldId, petIndex), 750)
        if (petIndex >= -1) {
            setTimeout(() => enableButtons(newId), 1500);
        }
    }

    const hide = (id) => {
        var element = document.getElementById(id);
        element.classList.remove("swipeleft");
        element.classList.remove("swiperight");
        element.classList.add("background");
    }

    const enableButtons = (id) => {
        var leftButton = document.getElementById(id + "left");
        var rightButton = document.getElementById(id + "right");
        leftButton.disabled = false;
        rightButton.disabled = false;
    }
    
    return (
        <div className="outsideDiv">
          <div id="page1" className="normal">
            <img src={require('./img/placeholder_asha.jpeg')} alt="" height={400} width={300} />
            <p>{page1Info}</p>
            <div>
              <button id="page1left" onClick={() => swipe("left", "page1", "page2")} type="button">
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
              <button id="page1right" onClick={() => swipe("right", "page1", "page2")} type="button">
                <i className="fa fa-heart" aria-hidden="true"></i>
              </button>
            </div>
          </div>
    
          <div id="page2" className={'normal background'}>
            <img src={require('./img/placeholder_barry.jpg')} alt="" height={400} width={300} />
            <p>{page2Info}</p>
            <div>
              <button id="page2left" onClick={() => swipe("left", "page2", "page1")} type="button">
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
              <button id="page2right" onClick={() => swipe("right", "page2", "page1")} type="button">
                <i className="fa fa-heart" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      );
}