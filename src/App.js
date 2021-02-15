import './App.css';
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path = "/checkout" component = {Checkout}/>
          <Route path = "/" component = {Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
