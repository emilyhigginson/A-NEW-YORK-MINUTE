import React, {useState} from 'react'
import Review from './Review'
import Spotmap from './Spotmap'

function FilterCard({id, name, location, category, walkin, image, price, reviews, lat, lng}) {
  const [showReviews, setShowReviews] = useState(false);

function toggleReviews() {
  setShowReviews((showReviews) => !showReviews);
}

  return (
    <div id= 'spotCard' >
      <div id= 'leftCard'>
        <h1 id= 'locationName'>{name}</h1>
        <img id= "spotimage" style={{"width": "500px"}} src={image}/>
        <div id="category">
        <h3 id="categoryChild1" >{category} </h3> 
        <h3 id="categoryChild2"> 📍{location} </h3>
        <button id="categoryChild3" onClick={toggleReviews}> Reviews</button>
        </div>
        {showReviews ? <Review reviews={reviews} id={id} /> : null}
       
        <Spotmap name={name} lat={lat} lng={lng}/>
      {/* <button> {isClicked ?  "★" : "☆"}  </button> */}
      </div>
    </div>
  )
}

export default FilterCard