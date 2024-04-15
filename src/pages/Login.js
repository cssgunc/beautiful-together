import { db } from "../firebase-config.js";
import { collection, addDoc } from "/firebase/firestore";
import "../css/login.css";


export const Login = () => {
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

    return (
        
        
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required placeholder="Enter your username" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required placeholder="Enter your password" />
                </div>
                <div className="button-container">
                    <button type="submit" className="login-button">Login</button>
                </div>
            </form>
            <div className="create-account">
                Don’t have an account? <a href="/signup">Create Account</a>
            </div>
        </div>
        
    );
}

// const signupForm = document.querySelector('#signup-form');
// signupForm.addEventListener('sumbit', (e) => {
//     e.preventDefault();

//     const email = signupForm['signup-email'].value;
//     const password = signupForm['signup-password'].value;

//     auth.createUserWithEmailAndPassword(email, password).then(cred => {
//         const modal = document.querySelector('#modal-signup');
//         M.Modal.getInstance(modal).close();
//         signupForm.requestFullscreen();
//     });
// });

const Logout = () => {
    const performLogout = async () => {
        try {
            await auth.signOut().then(()=> {
                console.log('Logged out successfully.')
            })
        } catch {
            console.error("Logout is unsuccessful. Error.")
        }
    }
    return (
        <button onClick={performLogout}>Logout</button>
    );
}