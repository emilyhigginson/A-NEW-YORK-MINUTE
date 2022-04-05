import React, {useEffect, useState} from "react";
import Login from "./Login";
import Home from "./Home";
import Filter from "./Filter";
import Profile from "./Profile";
import LandPage from "./LandPage"




function App() {
const [spotArray, setSpotArray] = useState([])
const [categoryInput, setCategoryInput] = useState("")
const [locationInput, setLocationInput] =useState("")
const [priceInput, setPriceInput] =useState("")



useEffect(()=> {
  fetch ('/spots')
  .then(res => res.json())
  .then(data => setSpotArray(data)) 
}, [])

  return (
    <div className="App">
   <h1>A NEW YORK MINUTE</h1>
   <LandPage/>
   <Login/>
   <Home/>
   <Profile/>
   <Filter 
   setCategoryInput={setCategoryInput}
   setLocationInput={setLocationInput}
   setPriceInput={setPriceInput}
   spotArray={spotArray}
   />
    </div>
  );
}

export default App;
