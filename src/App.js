import { React } from "react";
import Navbar from "./components/layout/Navbar";
import Joke from "./components/Joke"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Joke/>
    </div>
  );
}

export default App;
