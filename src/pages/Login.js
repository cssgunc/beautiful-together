import "../css/login.css";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";

export const Logout = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
    console.log("Logged out successfully.");
    localStorage.removeItem("userData");
    window.location.href = "/login";
  } catch (error) {
    console.error("Logout is unsuccessful. Error:", error);
  }
};

export const Login = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("userData", JSON.stringify(user));
        // Redirect to home page if the user is already logged in
        window.location.href = "/home";
      }
    });

    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      // Redirect to home page if the user is already logged in
      window.location.href = "/home";
    }

    return unsubscribe;
  }, [auth]);

  // define sign in method bound to html submit button
  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        // Signed in
        // Redirect to home page
        window.location.href = "/home";
      })
      .catch((error) => {
        console.log(error);
        console.log(typeof error);
        // If Error (auth/user-not-found), user doesn't exist
        if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
          alert("Invalid email or password. Please try again.");
        } else {
          alert(`Login failed. Error: ${error.message}`);
        }
      });
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