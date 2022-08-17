import "./App.css";
import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/SignUp/SignUp";
import Welcome from "./Pages/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome></Welcome>
      <SignUp></SignUp>
      <LogIn></LogIn>
    </div>
  );
}

export default App;
