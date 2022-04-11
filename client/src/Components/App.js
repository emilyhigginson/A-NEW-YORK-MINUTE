
import React, {useEffect, useState} from "react";
import './style.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Find from "./Find";
import Profile from "./Profile";
import LandPage from "./LandPage"
import AllSpots from "./AllSpots";
import Map from "./Map";
import Header from "./Header";
import NewSpotForm from "./NewSpotForm";

function App() {
  const [user, setUser] = useState(null);
  const [spotArray, setSpotArray] = useState([]);

useEffect(()=> {
  fetch ('/spots')
  .then(res => res.json())
  .then(data => setSpotArray(data)) 
}, [])

useEffect(() => {
  fetch("/me").then((response) => {
    if (response.ok) {
      response.json().then((user) => setUser(user));
    }
  });
}, []);



function onFormSubmit(newSpot) {
  setSpotArray([newSpot, ...spotArray])
}

// if (user) {

  return (
    <div className="App">
      {/* <Map/> */}
   {/* <LandPage/> */}
   
   <Router>
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

   <Route exact path='/profile'>
   <Profile user={user} spotArray={spotArray} onFormSubmit={onFormSubmit} />
   </Route>

   <Route exact path = '/add'>
     <NewSpotForm onFormSubmit={onFormSubmit} />
   </Route>

   <Route exact path ='/'>
   <Find spotArray={spotArray}/>
   </Route>

   </Switch>
   </Router>
    </div>
  );

// } else {
//   return <Login onLogin={setUser} />;
// }
}

export default App;
