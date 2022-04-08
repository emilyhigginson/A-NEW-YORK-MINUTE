
import React, {useEffect, useState} from "react";
import './style.css';
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Find from "./Find";
import Profile from "./Profile";
import LandPage from "./LandPage"
import AllSpots from "./AllSpots";
import Map from "./Map";
import Header from "./Header";

function App() {
  const [user, setUser] = useState(null);
  const [spotArray, setSpotArray] = useState([]);

useEffect(()=> {
  fetch ('/spots')
  .then(res => res.json())
  .then(data => setSpotArray(data)) 
}, [])

useEffect(()=> {
  fetch('/me').then((res) => {
    if (res.ok) {
      res.json().then((user) => setUser(user))
    }
   });
 }, []);

function onFormSubmit(newSpot) {
  setSpotArray([newSpot, ...spotArray])
}

  return (
    <div className="App">
      {/* <Map/> */}
   {/* <LandPage/> */}
<Header/>
   <Switch>

   <Route path='/spots'> 
   <AllSpots onFormSubmit={onFormSubmit} spotArray={spotArray} user={user}/>
   </Route>

   <Route exact path='/login'> 
   <Login onLogin={setUser}/>
   </Route>

   <Route exact path='/home'>
   <Home />
   </Route>

   <Route exact path='/me'>
   <Profile user={user} spotArray={spotArray} onFormSubmit={onFormSubmit} />
   </Route>

   <Route exact path ='/'>
   <Find spotArray={spotArray}/>
   </Route>

   </Switch>
    </div>
  );
}

export default App;
