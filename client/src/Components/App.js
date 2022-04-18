
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
  const [reviewArray, setReviewArray] = useState([])

  useEffect(() => {
    fetch("/me")
      .then((res) => res.json())
      .then(setCurrentUser)
  }, [])

useEffect(()=> {
  fetch ('/spots')
  .then(res => res.json())
  .then(data => setSpotArray(data)) 
}, [])

function onFormSubmit(newSpot) {
  setSpotArray([newSpot, ...spotArray])
}

useEffect(()=> {
  fetch ('/reviews')
  .then(res => res.json())
  .then(data => setReviewArray(data)) 
}, [])

function onReviewSubmit(newReview) {
  setReviewArray([newReview, ...reviewArray])
}
console.log(currentUser)
if (currentUser) {

  return (
    <div className="App">
      {/* <Map/> */}
   {/* <LandPage/> */}
   
   <Router>
   <Header currentUser={currentUser} setCurrentUser={setCurrentUser}/>

    <Switch>

   <Route path='/spots'> 
   <AllSpots onFormSubmit={onFormSubmit} spotArray={spotArray} user={currentUser}/>
   </Route>

   <Route exact path='/login'> 
   <Login currentUser={currentUser} setCurrentUser={setCurrentUser} onLogin={setCurrentUser}/>
   </Route>

   <Route exact path='/home'>
   <Home />
   </Route>

   <Route exact path='/profile'>
   <Profile user={currentUser} spotArray={spotArray} onFormSubmit={onFormSubmit} onReviewSubmit={onReviewSubmit} reviewArray={reviewArray} />
   </Route>

   <Route exact path = '/add'>
     <NewSpotForm onFormSubmit={onFormSubmit} />
   </Route>

   <Route exact path ='/search'>
   <Find user={currentUser} reviews={reviewArray} spotArray={spotArray}/>
   </Route>

   </Switch>
   </Router>
    </div>
  );

} else {
  return <Login onLogin={setCurrentUser} />;
}
}

export default App;
