
import React, {useEffect, useState} from "react";
import './style.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Find from "./Find";
import Profile from "./Profile";
import AllSpots from "./AllSpots";
import Header from "./Header";
import NewSpotForm from "./NewSpotForm";

function App() {
  const [spotArray, setSpotArray] = useState([]);
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    fetch("/me")
      .then((res) => res.json())
      .then(setCurrentUser)
  }, [])

console.log(currentUser)

useEffect(()=> {
  fetch ('/spots')
  .then(res => res.json())
  .then(data => setSpotArray(data)) 
}, [])

function onFormSubmit(newSpot) {
  setSpotArray([newSpot, ...spotArray])
}

// if (currentUser) {

  return (
    <div className="App">
      {/* <Map/> */}
   {/* <LandPage/> */}
   
   <Router>
   <Header/>

    <Switch>

   <Route path='/spots'> 
   <AllSpots onFormSubmit={onFormSubmit} spotArray={spotArray} user={currentUser}/>
   </Route>

   <Route exact path='/login'> 
   <Login onLogin={setCurrentUser}/>
   </Route>

   <Route exact path='/home'>
   <Home />
   </Route>

   <Route exact path='/profile'>
   <Profile user={currentUser} spotArray={spotArray} onFormSubmit={onFormSubmit} />
   </Route>

   <Route exact path = '/add'>
     <NewSpotForm onFormSubmit={onFormSubmit} />
   </Route>

   <Route exact path ='/search'>
   <Find user={currentUser} spotArray={spotArray}/>
   </Route>

   </Switch>
   </Router>
    </div>
  );

// } else {
//   return <Login onLogin={setCurrentUser} />;
// }
}

export default App;
