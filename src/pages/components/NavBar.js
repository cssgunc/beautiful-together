import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Logout } from '../Login';
import './NavBar.css';

const Navbar = () => {

    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
              window.location.href = "/login";
            }
          });
    });

  const handleLogout = async () => {
    await Logout();
    // Perform any additional logic after logout, e.g., redirect to login page
    window.location.href = '/login';
  };

  return (
    <nav>
      <div className="nav-container">
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;