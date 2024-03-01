import { db } from './firebase-config.js';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';


//adds a pet to the 'selectedPets' array and if the array does not exist it creates one
//note that this will not add repeated names. So adding 'bob' will work once, but trying to
//add 'bob' again will not add 2 'bob's. Each element must be unique. 
async function selectPet(userId, petName) {
  const userDocRef = doc(db, 'users', userId);

  try {
    
    await updateDoc(userDocRef, {
      selectedPets: arrayUnion(petName) 
    });
    
  } catch (error) {
    console.error("Error adding pet to selectedPets: ", error);
  }
}

export { selectPet };
