import { db } from "../firebase-config.js";
import { collection, addDoc } from "firebase/firestore";
import "../css/login.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; 


export const SignUp = () => {
    const userRef = "users";
    const createFirebaseUser = async (f_name, l_name, addr, countr, cit, sta, z_code, h_phone, c_phone, email_addr) => {
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
        const newUserRef = await addDoc(collection(db, userRef), newUser);
        return newUserRef.id;
    };

    const auth = getAuth(); 
    //const userRef = "users";


    // Handle form submission
    const handleSignUp = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Extract email and password from form
        const email = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        const confirmPassword = e.target.elements.confirmPassword.value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            // Use Firebase to create a new user
            console.log("test");
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            //const user = userCredential.user;

            const newUser = {
                
                f_name: e.target.elements.f_name.value, 
                l_name: e.target.elements.l_name.value, 
                addr: e.target.elements.addr.value, 
                countr: e.target.elements.countr.value, 
                cit: e.target.elements.cit.value, 
                sta: e.target.elements.sta.value, 
                z_code: e.target.elements.z_code.value, 
                h_phone: e.target.elements.h_phone.value, 
                c_phone: e.target.elements.c_phone.value, 
                email_addr: email
            };

            // Store additional user information in Firestore
            await createFirebaseUser(newUser.f_name, newUser.l_name, newUser.addr, newUser.countr, newUser.cit, newUser.sta, newUser.z_code, newUser.h_phone, newUser.c_phone, newUser.email_addr);

            alert("User created successfully!");
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
}