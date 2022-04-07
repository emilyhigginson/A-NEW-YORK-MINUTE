import React from 'react'
import Review from './Review'

function FilterCard({id, name, location, category, walkin, image, price, reviews}) {

 console.log({reviews})

  return (
    <div>
        <h1>{name}</h1>
        <img style={{"width": "500px"}} src={image}/>
        <h2>{category}</h2>
        <h3>{location}</h3>
        <p>{price}</p>
        <p> Walk-ins welcome? {walkin ? "yes" : "no"}</p>
      <Review reviews={reviews} id={id}/>
      {/* <button> {isClicked ?  "★" : "☆"}  </button> */}
        <button> </button>
    </div>
  )
}

export default FilterCard