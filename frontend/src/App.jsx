import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Customize from "./pages/Customize";
import Home from "./pages/Home";
import { userDataContext } from "./context/userContext";

function App() {
  const { userData } = useContext(userDataContext);

  return (
    <Routes>
      {/* Home route */}
      <Route
        path="/"
        element={
          userData
            ? (userData.assistantImage && userData.assistantName
                ? <Home />
                : <Navigate to="/Customize" />)
            : <Navigate to="/signin" />
        }
      />

      {/* Signup route */}
      <Route
        path="/signup"
        element={!userData ? <SignUp /> : <Navigate to="/" />}
      />

      {/* Signin route */}
      <Route
        path="/signin"
        element={!userData ? <SignIn /> : <Navigate to="/" />}
      />

      {/* Customize route */}
      <Route
        path="/Customize"
        element={userData ? <Customize /> : <Navigate to="/signin" />}
      />
    </Routes>
  );
}

export default App;
