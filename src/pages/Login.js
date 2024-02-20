import { db } from "../firebase-config.js";
import { collection, addDoc} from "firebase/firestore";
export const Login = () => {
    userRef = "users";
    createFirebaseUser = async (f_name, l_name, addr, countr, cit, sta, z_code, h_phone, c_phone, email_addr) => {
        newUser = {
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
        newUserId = await addDoc(collection(db, userRef), newUser);
        return newUserId;
    };

    return (
        <div>
        <header>Welcome to Beautiful Together</header>
        <p>Learn more about Beautiful Together <a href='https://beautifultogethersanctuary.com/'>here</a></p>
        <p>Learn the basics of our stack</p>

        <li><a href="https://www.youtube.com/watch?v=vAoB4VbhRzM">Firebase</a></li>
        <li><a href="https://www.youtube.com/watch?v=Tn6-PIqc4UM">React</a></li>
        <li><a href="https://www.youtube.com/watch?v=Tn6-PIqc4UM">React</a></li>
        <li><a href="https://youtu.be/mr15Xzb1Ook?si=5sDVCpSIBFxwa7UY">TailwindCSS</a></li>
        </div>
    );
}