import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/SignUp/SignUp";
import Welcome from "./Pages/Welcome/Welcome";
import Home from "./Pages/Home/Home";
import ProtectedRoute from "./Components/ProtectedRoute";
import axios from "axios";
import AuthContext from "./Components/Auth";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  useEffect(() => {
    axios
      .post("user/profile")
      .then((response) => {
        const newUser = response.data.user;
        if (!user) {
          setUser(newUser);
        }
      })
      .catch((err) => console.log(err));
  }, [user, token]);
  console.log(user);

  return (
    <div className="App">
      <AuthContext.Provider value={{ user, setUser, token, setToken }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Welcome />}></Route>
            {/* --------Conditional Routing--------  */}
            <Route
              path="/login"
              element={
                <ProtectedRoute user={!user} path="/dashboard">
                  <LogIn></LogIn>
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/signup"
              element={
                <ProtectedRoute user={!user} path="/dashboard">
                  <SignUp></SignUp>
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/*"
              element={
                <ProtectedRoute user={user} path="/login">
                  <Home></Home>
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
