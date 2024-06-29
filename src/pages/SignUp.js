import { useNavigate } from "react-router-dom";
import { db } from "../firebase-config.js";
import { collection, doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "../css/login.css";

export const SignUp = () => {
    const userRef = "users";
    const auth = getAuth();
    const navigate = useNavigate(); // Initialize useNavigate hook for navigation

    const createFirebaseUser = async (userId, newUser) => {
        await setDoc(doc(db, userRef, userId), newUser);
    };

    const handleSignUp = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const email = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        const confirmPassword = e.target.elements.confirmPassword.value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const newUser = {
                first_name: e.target.elements.f_name.value,
                last_name: e.target.elements.l_name.value,
                address: e.target.elements.addr.value,
                country: e.target.elements.countr.value,
                city: e.target.elements.cit.value,
                state: e.target.elements.sta.value,
                zip_code: e.target.elements.z_code.value,
                home_phone: e.target.elements.h_phone.value,
                cell_phone: e.target.elements.c_phone.value,
                email: email
            };

            await createFirebaseUser(user.uid, newUser);

            // sessionStorage.setItem('userUID', user.uid);
            localStorage.setItem("userData", JSON.stringify(user));

            alert("User created successfully!");

            // Redirect to "/home" after successful signup
            navigate("/home");
        } catch (error) {
            alert(`Error creating user: ${error.message}`);
        }
    };

    return (
        <div className="login-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="input-group">
                    <label htmlFor="f_name">First Name</label>
                    <input type="text" id="f_name" name="f_name" required placeholder="Enter your first name" />
                </div>
                <div className="input-group">
                    <label htmlFor="l_name">Last Name</label>
                    <input type="text" id="l_name" name="l_name" required placeholder="Enter your last name" />
                </div>
                <div className="input-group">
                    <label htmlFor="addr">Address</label>
                    <input type="text" id="addr" name="addr" required placeholder="Enter your address" />
                </div>
                <div className="input-group">
                    <label htmlFor="countr">Country</label>
                    <input type="text" id="countr" name="countr" required placeholder="Enter your country" />
                </div>
                <div className="input-group">
                    <label htmlFor="cit">City</label>
                    <input type="text" id="cit" name="cit" required placeholder="Enter your city" />
                </div>
                <div className="input-group">
                    <label htmlFor="sta">State</label>
                    <input type="text" id="sta" name="sta" required placeholder="Enter your state" />
                </div>
                <div className="input-group">
                    <label htmlFor="z_code">Zip Code</label>
                    <input type="text" id="z_code" name="z_code" required placeholder="Enter your zip code" />
                </div>
                <div className="input-group">
                    <label htmlFor="h_phone">Home Phone</label>
                    <input type="tel" id="h_phone" name="h_phone" required placeholder="Enter your home phone number" />
                </div>
                <div className="input-group">
                    <label htmlFor="c_phone">Cell Phone</label>
                    <input type="tel" id="c_phone" name="c_phone" required placeholder="Enter your cell phone number" />
                </div>
                <div className="input-group">
                    <label htmlFor="username">Username (Email)</label>
                    <input type="email" id="username" name="username" required placeholder="Enter your email" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required placeholder="Enter your password" />
                </div>
                <div className="input-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="Confirm your password" />
                </div>
                <div className="button-container">
                    <button type="submit" className="login-button">Sign Up</button>
                </div>
            </form>
            <div className="create-account">
                Have an account? <a href="/login">Login</a>
            </div>
        </div>
    );
};