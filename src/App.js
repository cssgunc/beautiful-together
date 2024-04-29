import logo from './logo.svg';
import './App.css';
import {RoutesApp} from './Routes'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";


function App() {

const [saveUser, setSaveUser] = useState(null);

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User Is Logged In");
    // User Is Logged In and Saves User Credential
    const uid = user.uid;
    setSaveUser(user);
  } else {
    //User Is Not Logged In
    setSaveUser(null);
    console.log("User Is Not Logged in");
  }
});

  //Added User Props
  return (
      <RoutesApp saveUser={saveUser} />
  );
}

export default App;