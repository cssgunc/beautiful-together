import { db, auth } from "../../firebase-config.js";
import { collection, addDoc, setDoc, getDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import './form.css';

export const SignupForm = () => {
    const userRef = "users";

    // define email and password fields bound to html input fields
    const [email_field, setEmail] = useState("");
    const [password_field, setPassword] = useState("");

    const checkEmailExists = async (email_addr) => {
        const query = await db.collection(userRef).where("email", "==", "email_addr");
        return !query.empty;
    };

    const checkUidExists = async (uid) => {
        return getDoc( doc(db, userRef, uid) ).exists();
    }

    /*

    // TODO: figure out what information should be stored in a persistent profile
    // and what should be requested with every application
    // currently required information for an application is:
        // profile
            // first name, last name, age range (<18, <25, <55, <70, 70+),
            // email, phone, + optional home phone, address (street + second line, city, zip, state, country)
            // preferred contact method (email, home, cell, work)
            // in school* -> full or part time
            // employed* -> workday hours outside of home
            // how did user hear about the site: 
                                                // adopted before, internet, friend*, shelter*, another rescue*,
                                                // FB, IG, Twitter, Petfinder, Adopt-a-Pet,
                                                // Petco Adoption Event, PetSmart Adoption Event
                                                // Other*
                // * -> must give name of friend, which shelter/rescue, please describe (other)
        */
       /*
        // other people in home
            // other adults? (must provide info about each)
            // other children? (yes/no)
                // if cats: other cats? (must provide info about each)
                // if dogs: have you had or do you have a dog? (must provide info about each)
            // other pets? (must provide info about each)

        // home
            // type of residents, own/rent* -> if rent, provide info about landlord policy & contact info
                // if dog, yard? -> fenced? 
    */
   
    /*
    <div className="flex flex-col pt-2 pb-4 px-3 h-20 w-full align-top bg-orange-300 rounded-sm border-orange-300 border-4 m-2">
                        <label className="font-sans text-white" for="stateprovince">How did you hear about us?</label>
                        <select className="h-10 w-30 bg-stone-200 rounded-sm border-orange-400 border-2" id="stateprovince" name="stateprovince" required> 
                            <option value="" selected disabled> </option>
                            <option value="">Adopted from this rescue before</option>

    */

    const createFirebaseUser = async (f_name, l_name, addr, countr, cit, sta, z_code, h_phone, c_phone, email_addr) => {
        email_addr = email_field;
        console.log(email_field);
        const newUser = {
            first_name: f_name, 
            last_name: l_name, 
            address: addr, 
            country: countr, 
            city: cit, 
            state: sta, 
            zip_code: z_code, 
            home_phone: h_phone, 
            cell_phone: c_phone, 
            email: email_addr
        };
        // check if the user already exists (there should only be 1 user per email address)
        if (checkEmailExists(email_field)) {
            // TODO: redirect, or display notification that user already exists
            return "-1";
        }

        // use the user's UID token from Firebase Authentication as the custom Document ID in Firestore database
        // in order to get current user data, use getDoc( doc( db, "users", auth.currentUser.uid ) )

        await createUserWithEmailAndPassword(auth, email_field, password_field)
            .then(async (userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // TODO: add user to FireStore

                const token = user.uid;
                
                // may want to add a possibly redundant layer of verification here
                // if (checkUidExists) { // uid already exists }
                await setDoc(doc(db, userRef, user.uid), newUser); // check that this works?

                // (previous code here)
                // const newUserRef = await addDoc(collection(db, userRef), newUser);
                // return newUserRef.id;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    };

    return (
        <div>
            <header>Welcome to Beautiful Together</header>
            <p>Learn more about Beautiful Together <a href='https://beautifultogethersanctuary.com/'>here</a></p>
            <p>Learn the basics of our stack</p>

            <div>
                <form className="FormContainer">
                    <h1>Sign Up</h1>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email_field}
                        onChange={(e) => setEmail(e.target.value)}>
                    </input>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password_field}
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>
                    <button
                        type="submit"
                        onClick={createFirebaseUser}>
                            Sign Up
                    </button>
                </form>
            </div>


            <li><a href="https://www.youtube.com/watch?v=vAoB4VbhRzM">Firebase</a></li>
            <li><a href="https://www.youtube.com/watch?v=Tn6-PIqc4UM">React</a></li>
            <li><a href="https://www.youtube.com/watch?v=Tn6-PIqc4UM">React</a></li>
            <li><a href="https://youtu.be/mr15Xzb1Ook?si=5sDVCpSIBFxwa7UY">TailwindCSS</a></li>
        </div>
    );

}