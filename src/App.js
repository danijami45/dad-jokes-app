import { React } from "react";
import Navbar from "./components/layout/Navbar";
import Joke from "./components/Joke"
import {BrowserRouter as Router, Route} from "react-router-dom"
import About from "./components/pages/About"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route path="/" exact component={Joke}/>
        <Route path="/about" exact component={About}/>
      </div>
    </Router>
  );
}

export default App;
