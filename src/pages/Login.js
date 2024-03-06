import { db } from "../firebase-config.js";
import { collection, addDoc } from "firebase/firestore";
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
        
        <body class="bg-gray-100 flex items-center justify-center h-screen">
  <div class="bg-white p-8 rounded shadow-md w-full max-w-sm">
    <form action="#" method="POST">
      <div class="mb-6">
        <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username</label>
        <input type="text" id="username" name="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="username"></input>
      </div>
      <div class="mb-6">
        <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input type="password" id="password" name="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="********"></input>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Login
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-800" href="#">
          Create Account
        </a>
      </div>
    </form>
  </div>
</body>
    );
}