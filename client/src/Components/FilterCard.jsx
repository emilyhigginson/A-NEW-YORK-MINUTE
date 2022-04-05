import React from 'react'

function FilterCard({name, location, category, walkin, image, price}) {
  return (
    <div>
        <h1>{name}</h1>
        <img style={{"width": "500px"}} src={image}/>
        <h2>{category}</h2>
        <h3>{location}</h3>
        <p> Walk-ins welcome? {walkin ? "yes" : "no"}</p>
    </div>
  )
}

export default FilterCard