import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config.js';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import './Checkout.css';

export const Checkout = () => {
  const [selectedCats, setSelectedCats] = useState([]);

  useEffect(() => {
    const fetchSelectedCats = async () => {
      try {
        const userUID = JSON.parse(localStorage.getItem("userData")).uid;
        const userRef = doc(db, "users", userUID);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          const selectedCatIds = userData.selected_cats || [];

          const catsRef = collection(db, "cats");
          const catDocs = await getDocs(catsRef);
          const catsData = catDocs.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

          const selectedCatsData = catsData.filter((cat) => selectedCatIds.includes(cat.id));
          console.log(selectedCatsData)
          
          // Update the image URLs
          const updatedSelectedCatsData = selectedCatsData.map((cat) => {
            const imageId = cat.imageURL.split('/').pop();
            const directImageUrl = `https://i.imgur.com/${imageId}.jpg`;
            return { ...cat, ImageUrl: directImageUrl };
          });
          
          setSelectedCats(updatedSelectedCatsData);
        }
      } catch (error) {
        console.error("Error fetching selected cats:", error);
      }
    };

    fetchSelectedCats();
  }, []);

  const handleRequestPets = () => {
    // TODO: Logic for requesting the selected pets
    console.log('Requesting selected pets:', selectedCats);
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-heading">Checkout</h2>
      {selectedCats.length === 0 ? (
        <p className="no-cats-message">No cats selected.</p>
      ) : (
        <>
          <ul className="selected-cats-list">
            {selectedCats.map((cat) => (
              <li key={cat.id} className="selected-cat-item">
                <h3>{cat.Breed}</h3>
                <p>Age: {cat.Age}</p>
                <p>Status: {cat.Status}</p>
                <img src={cat.ImageUrl} alt={cat.Breed} />
              </li>
            ))}
          </ul>
          <button className="request-pets-button" onClick={handleRequestPets}>
            Request These Pets!
          </button>
        </>
      )}
    </div>
  );
};