import "../css/login.css";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Login = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  // define email and password fields bound to html input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // define sign in method bound to html submit button
  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        // signed in
        // TODO: Redirect to home page
        navigate("/petselection");
      })
      .catch((error) => {
        console.log(error);
        console.log(typeof error);
        // if Error (auth/user-not-found), user doesn't exist
      });
  };

  const Logout = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      console.log('Logged out successfully.');
      // TODO: Redirect to login page or update UI to reflect logged out state
    } catch (error) {
      console.error("Logout is unsuccessful. Error:", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="button-container">
          <button type="submit" className="login-button" onClick={SignIn}>
            Log In
          </button>
        </div>
      </form>
      <div className="create-account">
        Don't have an account? <a href="/signup">Create Account</a>
      </div>
    </div>
  );
};