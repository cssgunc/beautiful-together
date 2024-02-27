import { db, auth } from "../../firebase-config.js";
import { collection, addDoc, setDoc } from "firebase/firestore";
import './form.css';

export const SignupForm = () => {
    const userRef = "users";

    // define email and password fields bound to html input fields
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const checkEmailExists = async (email_addr) => {
        const query = await this.db.collection(userRef).where("email", "==", "email_addr");
        return !query.empty;
    };

    const checkUidExists = async (uid) => {
        return getDoc( doc(db, userRef, uid) ).exists();
    }

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
        // check if the user already exists (there should only be 1 user per email address)
        if (checkEmailExists(email_addr)) {
            // TODO: redirect, or display notification that user already exists
            return "-1";
        }

        // use the user's UID token from Firebase Authentication as the custom Document ID in Firestore database
        // in order to get current user data, use getDoc( doc( db, "users", auth.currentUser.uid ) )

        firebase.auth().currentUser
        createUserWithEmailAndPassword(auth, email_addr, password)
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
                        onClick={createFirebaseUser}>
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