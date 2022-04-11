import React from 'react'
import Review from './Review'

function FilterCard({id, name, location, category, walkin, image, price, reviews}) {


  return (
    <div id= 'spotCard'>
              <h1 id= 'locationName'>{name}</h1>

        <img id= "spotimage" style={{"width": "500px"}} src={image}/>
        <div id="category">
        <h3 id="categoryChild1" >{category} </h3> 
        <h3 id="categoryChild2"> {location} </h3>
        </div>
        <p>{price}</p>
      {/* <Review reviews={reviews} id={id}/> */}
      {/* <button> {isClicked ?  "★" : "☆"}  </button> */}
        <button> </button>
    </div>
  )
}

export default FilterCard