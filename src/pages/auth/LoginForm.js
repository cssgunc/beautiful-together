import { db, auth } from "../../firebase-config.js";
// import { collection, addDoc, setDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import './form.css';


export const LoginForm = () => {
    const userRef = "users";

    // define email and password fields bound to html input fields
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // define sign in method bound to html submit button
    const SignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword( auth, email, password )
            .then( (userCredential) => {
                console.log(userCredential);
                // signed in
                // TODO: implement what to do here. maybe redirect to home page?
            }).catch( (error) => { 
                console.log(error);
                console.log(typeof(error));
                // if Error (auth/user-not-found), user doesn't exist
            });
    }

    return (
        <div>
            <header>Welcome to Beautiful Together</header>
            <p>Learn more about Beautiful Together <a href='https://beautifultogethersanctuary.com/'>here</a></p>
            <p>Learn the basics of our stack</p>

            <div>
                <form className="FormContainer">
                    <h1>Log In</h1>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}>
                    </input>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>
                    <button
                        type="submit"
                        onClick={SignIn}>
                            Log In
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