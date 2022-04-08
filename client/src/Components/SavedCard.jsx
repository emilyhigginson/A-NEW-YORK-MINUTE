import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'


function SavedCard({handleDelete, id, name, location, category, image}) {

    return (
      <div>
          <h1>{name}</h1>
          <img style={{"width": "500px"}} src={image}/>
          <h2>{category}</h2>
          <h3>{location}</h3>
          <button onClick={() => handleDelete(id)}> Unsave this Spot </button>
          <button> </button>
      </div>
    )
  }

export default SavedCard