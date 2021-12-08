import React from 'react';
import KingContainer from './components/classwork/kings/KingContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './App.css';
import Home from './components/sports/Home';
 import About from './components/classwork/routes/About';
 import Shop from './components/classwork/routes/Shop';
import Counter from './components/classwork/counter';
import Nav from './components/classwork/routes/Nav';
import DisplayParameter from './components/classwork/routes/DisplayParameter';
import PlayerContainer from './components/sports/PlayerContainer';
import Header from './components/sports/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  


  return (
    <div className="App" >
      <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
      integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
      crossorigin="anonymous"
    />
      <Header/>
     
      <Router>
        <nav>
          <Link to="/">
            Home
          </Link>
          <br></br>
          <br></br>

          <Link to="/Players">
          Players
        </Link>
        </nav>
          <Route exact path="/">
          <Home/>
        </Route>

     
        <Route exact path="/Players">
          
          <PlayerContainer/>
        </Route>

        
      </Router>
         {/* <>
         <Router>
        <nav>
          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/parameters">
            Parameters Example
          </Link>
        </nav>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/about">
          <About/>
        </Route>

        <Route path="/parameters/:myParameter">
          <DisplayParameter />
        </Route>
        
         </Router>
         </> */}
     
 
      {/* <Counter/>
      <KingContainer/> */}
      
    </div>
  );
}

export default App;
