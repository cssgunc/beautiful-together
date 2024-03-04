import { db } from './firebase-config.js';
import { addDoc, collection, doc } from 'firebase/firestore';

// I just made this file like a copy of responseEmail
// Based on how it should work, I am not confident in whether or not this implementation is on the correct track


async function addPetSurvey(ageRange, kids, livingConditions, activity, num_of_pets,
     pet_preference, travel, other_pets, follow_up, time_for_pet,
      why, allergies, previous_owner, yard, additional_info ) {

        const petSurveyData= {
           PetSurvey: {
            // 
           }

        }

    

    try {
        const docRef = await addDoc(collection(db, "pet_Survey"), petSurveyData);
        console.log('Document written with ID: ', docRef.id);
    } catch (error) {
        console.error('Erroe adding document: ', error);
        }
    }
    export { addPetSurvey };



    

