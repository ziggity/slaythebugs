import React from "react";
import PlayMat from "./components/PlayMat";
import "./App.css";
import UserLoginForm from "./user/UserLoginForm";
import DeckOfCards from "./components/DeckOfCards";

function App() {
  return (
    <div className="App">
      <UserLoginForm name="userlogin" />
      <PlayMat />
      <DeckOfCards />
    </div>
  );
}

export default App;
