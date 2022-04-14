import React, {useState} from 'react'
import Filter from './Filter';
import FilterContainer from './FilterContainer';

function Find({spotArray, user}) {
    const [categoryInput, setCategoryInput] = useState("")
    const [locationInput, setLocationInput] =useState("")
    const [freeInput, setFreeInput] =useState(false)
    const [resultIsShowing, setResultIsShowing] = useState(true)
    // const [isClicked, setIsClicked] = useState(false)
   
    function toggleResult() {
        setResultIsShowing((resultIsShowing) => !resultIsShowing)
    }
   
    const filterByCategory = spotArray.filter((spot) => spot.category.toLowerCase().includes(categoryInput.toLowerCase()) 
    );

    const filterByLocation = filterByCategory.filter((spot) =>
    spot.location.toLowerCase().includes(locationInput.toLowerCase())
  );

console.log(filterByLocation)
  const filterByPrice = filterByLocation.filter((spot) => {
    if ((spot.free) === freeInput) { 
      return spot 
    } else if ((spot.free === freeInput)) {
    return null
    }
  });

  return (
    <div>
      {/* <button onClick={returnRandom()}></button> */}
      
        <Filter setCategoryInput={setCategoryInput} setLocationInput={setLocationInput} setFreeInput={setFreeInput}/>
        <button onClick={toggleResult} > Show Result </button>
        {resultIsShowing ? null :  <FilterContainer user={user} spots={filterByPrice}/>}
       
    </div>
  )
}

export default Find