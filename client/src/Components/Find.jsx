import React, {useState} from 'react'
import Filter from './Filter';
import FilterContainer from './FilterContainer';

function Find({spotArray}) {
    const [categoryInput, setCategoryInput] = useState("")
    const [locationInput, setLocationInput] =useState("")
    const [priceInput, setPriceInput] =useState(0)


    const filterByCategory = spotArray.filter((spot) =>
      spot.category.toLowerCase().includes(categoryInput.toLowerCase())
    );

    const filterByLocation = filterByCategory.filter((spot) =>
    spot.location.toLowerCase().includes(locationInput.toLowerCase())
  );
  

//     const filterByPrice = filterByLocation.filter((spot) =>
//     spot.price_range.includes(priceInput)

//   );

  return (
    <div>
        <Filter setCategoryInput={setCategoryInput} setLocationInput={setLocationInput} setPriceInput={setPriceInput}/>
        <FilterContainer spots={filterByLocation}/>
    </div>
  )
}

export default Find