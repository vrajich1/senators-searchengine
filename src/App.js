import React from 'react';
import './App.css';
import {Route, Link} from 'react-micro-router';
import Search from './Components/search'; 
import Home from './Components/home';

const URI = "https://www.govtrack.us/api/v2/role?current=true&role_type=senator"
fetch(URI)
    .then(res => res.json()
    );



function App() {
  return (
    <div className="App">
    <Link to="/">Home</Link> {" "}
            <Link to="/search">Search</Link>
 
            <Route path="/" exact>
            <Home/>
            </Route>
 
            <Route path="/search">
            <Search/>
            </Route>
    </div>
  );
}

export default App;
