// No Pets Remaining Code is unnecessary technically, but left in here in case of future development

import { useState, useEffect } from 'react';
import { db } from '../firebase-config.js';
import { collection, getDocs, query, getDoc, doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import {useNavigate} from 'react-router-dom';
import './PetSelection.css';

export const PetSelection = () => {
    const navigate = useNavigate();
    const catRef = "cats";
    const catDetails = ["Age", "Breed", "Status"];

    const [pets, setPets] = useState([]);
    const [petIndex, setPetIndex] = useState(0);

    const [page1Info, setPage1Info] = useState("loading");
    const [page2Info, setPage2Info] = useState("loading");
    const [page1ImageUrl, setPage1ImageUrl] = useState("");
    const [page2ImageUrl, setPage2ImageUrl] = useState("");
    const pageMap = { page1: setPage1Info, page2: setPage2Info };
    const imageUrlMap = { page1: setPage1ImageUrl, page2: setPage2ImageUrl };

    useEffect(() => {
        async function fetchPets() {
            const userUID = JSON.parse(localStorage.getItem("userData")).uid;
            const userRef = doc(db, "users", userUID);
            const userDoc = await getDoc(userRef);
            let cats = [];

            if (userDoc.exists()) {
                const userPreferences = userDoc.data();
                const ageFilter = userPreferences.cat_age;
                const furFilter = userPreferences.cat_fur_length;
                const litterboxFilter = userPreferences.cat_litterbox;
                const traitsFilter = userPreferences.cat_traits;

                const catQuery = query(collection(db, catRef));
                const catDocs = await getDocs(catQuery);

                catDocs.forEach((doc) => {
                    const cat = {
                        id: doc.id,
                        Age: doc.get("Age"),
                        Breed: doc.get("Breed"),
                        Status: doc.get("Status"),
                        Trained: doc.get("Trained"),
                        ImageUrl: doc.get("imageURL"),
                        EnergyLevel: doc.get("Energy Level")
                    };

                    const isMatch = (
                        (!ageFilter || cat.Age === ageFilter) &&
                        (!furFilter || cat.Breed.toLowerCase().replace(/[\s-]/g, '').includes(furFilter.toLowerCase().replace(/[\s-]/g, ''))) &&
                        (!litterboxFilter || (litterboxFilter === "Yes" ? cat.Trained === "I'm Litterbox Trained" : true)) &&
                        (!traitsFilter || traitsFilter.some(trait => cat.EnergyLevel.includes(trait)))
                    );

                    if (isMatch) {
                        cats.push(cat);
                    }
                });

                setPets(cats);
                if (cats.length === 0) {
                    displayNoPets();
                } else if (cats.length === 1) {
                    updatePetElement("page1", 0);
                    setPage2Info("");
                    setPage2ImageUrl("");
                    disableButtons("page2");
                } else {
                    updatePetElement("page1", 0);
                    updatePetElement("page2", 1);
                    enableButtons("page1");
                    enableButtons("page2");
                }
            } else {
                console.log("User document not found");
            }
        }

        fetchPets();
    }, []);

    useEffect(() => {
        if (pets.length > 0) {
            updatePetElement("page1", 0);
            updatePetElement("page2", 1);
        }
    }, [pets]);

    function displayNoPets() {
        setPage1Info("No Pets Remaining");
        setPage2Info("No Pets Remaining");
        setPage1ImageUrl("https://t3.ftcdn.net/jpg/01/12/43/90/360_F_112439022_Sft6cXK9GLnzWjjIkVMj2Lt34RcKUpxm.jpg");
        setPage2ImageUrl("https://t3.ftcdn.net/jpg/01/12/43/90/360_F_112439022_Sft6cXK9GLnzWjjIkVMj2Lt34RcKUpxm.jpg");
        disableButtons("page1");
        disableButtons("page2");
    }

    function updatePetElement(id, index) {
        const setPage = pageMap[id];
        const setImageUrl = imageUrlMap[id];
        if (index >= 0 && index < pets.length) {
            const pet = pets[index];
            let petInfo = "";
            for (let i = 0; i < catDetails.length; i++) {
                const field = catDetails[i];
                petInfo += field + ": " + pet[field] + "\n";
            }
            setPage(petInfo);

            const imageId = pet.ImageUrl.split('/').pop();
            const directImageUrl = `https://i.imgur.com/${imageId}.jpg`;            
            setImageUrl(directImageUrl);
        } else {
            setPage("No Pets Remaining");
            setImageUrl("https://t3.ftcdn.net/jpg/01/12/43/90/360_F_112439022_Sft6cXK9GLnzWjjIkVMj2Lt34RcKUpxm.jpg");
            disableButtons(id);
        }
    }

    function disableButtons(id) {
        const leftButton = document.getElementById(id + "left");
        const rightButton = document.getElementById(id + "right");
        leftButton.disabled = true;
        rightButton.disabled = true;
    }

    function enableButtons(id) {
        const leftButton = document.getElementById(id + "left");
        const rightButton = document.getElementById(id + "right");
        leftButton.disabled = false;
        rightButton.disabled = false;
    }

    const addSelectedPetToUser = async (petId, userUID) => {
      try {
        const userRef = doc(db, "users", userUID);
        await updateDoc(userRef, {
          selected_cats: arrayUnion(petId)
        });
        console.log("Pet ID added to user's selected_pets array");
      } catch (error) {
        console.error("Error adding pet ID to user's selected_pets array:", error);
      }
    };

    const removeSelectedPetFromUser = async (petId, userUID) => {
      try {
        const userRef = doc(db, "users", userUID);
        await updateDoc(userRef, {
          selected_cats: arrayRemove(petId)
        });
        console.log("Pet ID removed from user's selected_pets array");
      } catch (error) {
        console.error("Error removing pet ID from user's selected_pets array:", error);
      }
    };

    const swipe = (side, oldId, newId) => {
        console.log("Swiped");
        const userUID = JSON.parse(localStorage.getItem("userData")).uid;
        removeSelectedPetFromUser(pets[petIndex].id, userUID);

        const oldElement = document.getElementById(oldId);
        const newElement = document.getElementById(newId);
        oldElement.classList.add("swipe" + side);
        newElement.classList.remove("background");

        disableButtons(newId);
        disableButtons(oldId);

        setTimeout(() => hide(oldId), 750);
        setTimeout(() => {
            const nextIndex = (petIndex + 1) % pets.length;
            setPetIndex(nextIndex);
            updatePetElement(oldId, nextIndex);
        }, 750);
        if (petIndex >= -1) {
            setTimeout(() => enableButtons(newId), 1500);
        }
    }

    const swipeHeart = (side, oldId, newId) => {
    console.log("Hearted");
      const userUID = JSON.parse(localStorage.getItem("userData")).uid;
      addSelectedPetToUser(pets[petIndex].id, userUID);
      
      const oldElement = document.getElementById(oldId);
      const newElement = document.getElementById(newId);
      oldElement.classList.add("swipe" + side);
      newElement.classList.remove("background");

      disableButtons(newId);
      disableButtons(oldId);

      setTimeout(() => hide(oldId), 750);
      setTimeout(() => {
          const nextIndex = (petIndex + 1) % pets.length;
          setPetIndex(nextIndex);
          updatePetElement(oldId, nextIndex);
      }, 750);
      if (petIndex >= -1) {
          setTimeout(() => enableButtons(newId), 1500);
      }
  }

    const hide = (id) => {
        const element = document.getElementById(id);
        element.classList.remove("swipeleft");
        element.classList.remove("swiperight");
        element.classList.add("background");
    }

    return (
        <div className="outsideDiv">
            <div id="page1" className="normal">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
      <svg
        onClick={() => navigate('/checkout')}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        width="30"
        height="30"
      >
        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
      </svg>
    </div>
                <img src={page1ImageUrl} alt="" height={400} width={300} />
                <p>{page1Info}</p>
                <div>
                    <div type="button" className='divButton' style={{ cursor: 'pointer', padding: '10px', color: '#fe3c72', fontSize: '24px' }} id="page1left" onClick={() => swipe("left", "page1", "page2")}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <div type="button" className='divButton' style={{ cursor: 'pointer', padding: '10px', color: '#fe3c72', fontSize: '24px' }} id="page1right" onClick={() => swipeHeart("right", "page1", "page2")}>
                        <i className="fa fa-heart" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

            <div id="page2" className={'normal background'}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
      <svg
        onClick={() => navigate('/checkout')}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        width="30"
        height="30"
      >
        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
      </svg>
    </div>
                <img src={page2ImageUrl} alt="" height={400} width={300} />
                <p>{page2Info}</p>
                <div>
                    <div type="button" className='divButton' style={{ cursor: 'pointer', padding: '10px', color: '#fe3c72', fontSize: '24px' }} id="page2left" onClick={() => swipe("left", "page2", "page1")}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <div type="button" className='divButton' style={{ cursor: 'pointer', padding: '10px', color: '#fe3c72', fontSize: '24px' }} id="page2right" onClick={() => swipeHeart("right", "page2", "page1")}>
                        <i className="fa fa-heart" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}