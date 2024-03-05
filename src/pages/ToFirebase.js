import { db } from './firebase-config.js';
import { addDoc, collection, doc } from 'firebase/firestore';

// I just made this file like a copy of responseEmail
// Based on how it should work, I am not confident in whether or not this implementation is on the correct track


async function addPetSurvey(ageRange, kids, livingConditions, activity, num_of_pets,
     pet_preference, travel, other_pets, follow_up, time_for_pet,
      why, allergies, previous_owner, yard, additional_info ) {
        // should we specify data type?

        const petSurveyData= {
           age_range: ageRange,
           kids_under_13: kids,
           living_condition: livingConditions,
           activity_level: activity,
           num_pets: num_of_pets,
           pet_preferences: pet_preference,
           travel_often: travel,
           other_pet: other_pets,
           pet_pref_followup: follow_up,
           time_allocated: time_for_pet,
           why_pet: why,
           household_allergies: allergies,
           pet_owned_before: previous_owner,
           fenced_yard: yard,
           more_info: additional_info
        }

    

    try {
        const docRef = await addDoc(collection(db, "pet_Survey"), petSurveyData);
        console.log('Document written with ID: ', docRef.id);
    } catch (error) {
        console.error('Error adding document: ', error);
        }
    }
    export { addPetSurvey };



    

