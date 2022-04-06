import React, {useEffect, useState} from "react";
import Login from "./Login";
import Home from "./Home";
import Find from "./Find";
import Profile from "./Profile";
import LandPage from "./LandPage"
import AllSpots from "./AllSpots";

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
   <LandPage/>
   <AllSpots onFormSubmit={onFormSubmit} spotArray={spotArray} user={user}/>
   <Login onLogin={setUser}/>
   <Home/>
   <Profile user={user} spotArray={spotArray} onFormSubmit={onFormSubmit} />
   <Find
   spotArray={spotArray}/>
    </div>
  );
}

export default App;
