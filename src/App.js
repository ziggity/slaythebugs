import React from "react";
import PlayMat from "./components/PlayMat";
import "./App.css";
import GameBoard from "./components/Gameboard";
import UserLoginForm from "./user/UserLoginForm";
import Hand from "./components/Hand";

function App() {
  return (
    <div className="App">
      <UserLoginForm name="userlogin" />
      <PlayMat />
      <Hand />
    </div>
  );
}

export default App;
