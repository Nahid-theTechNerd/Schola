import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/SignUp/SignUp";
import Welcome from "./Pages/Welcome/Welcome";
import Home from "./Pages/Home/Home";
// import ProtectedRoute from "./Components/ProtectedRoute";
// import axios from "axios";

function App() {
  // axios
  //   .get("user/profile")
  //   .then((response) => console.log(response))
  //   .catch((err) => console.log(err));
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/*" element={<Home />}></Route>

          {/* --------Conditional Routing--------  */}
          {/* <Route
            exact
            path="/"
            element={
              <ProtectedRoute user={!isUser} path="/dashboard">
                <Welcome></Welcome>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <ProtectedRoute user={!isUser} path="/dashboard">
                <SignUp></SignUp>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <ProtectedRoute user={!isUser} path="/dashboard">
                <LogIn></LogIn>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/*"
            element={
              <ProtectedRoute user={isUser} path="/login">
                <Home></Home>
              </ProtectedRoute>
            }
          ></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
