import React, { useState } from 'react'
import Select from 'react-select'
import ReviewForm from './ReviewForm'
import Map from './Map'

function NewSpotForm({onFormSubmit}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [location, setLocation] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [walkin, setWalkin] = useState(null)
  const [lat, setLat] = useState("")
  const [lng, setLng] = useState("")

  function handleSubmit(event) {
    const newSpot = {
      name, image, location, category, price, walkin
    }
    event.preventDefault();
    fetch("/spots", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
    .then((response) => response.json())
    .then(item => console.log(item))
    .then((data) => onFormSubmit(data));
  }

  const categoryOptions = [
    { value: "Food & Drink", label: "Food & Drink" },
    { value: "Activity", label: "Activity" },
    { value: "Fitness", label: "Fitness" },
    { value: "Touristy", label: "Touristy" }
  ];

const locationOptions = [
    { value: "Chelsea", label: "Chelsea"},
    {value: "East Village", label: "East Village"},
    {value: "Flatiron", label: "Flatiron"},
    {value: "Gramercy", label: "Gramercy"},
    {value: "Midtown", label: "Midtown"},
    {value: "Times Square", label: "Times Square"},
    {value: "West Village", label: "West Village"}
]

const priceOptions = [
    {value: true, label: "free "},
    {value: false, label: "$$$"},
]
  return (
    <div className='spotPage'>

    
      <Map setLng={setLng} setLat={setLat} />
      <h1>No Gatekeeping Here!
        Add your favorite NYC spot so others can experience it too!
      </h1>
      <form onSubmit={handleSubmit}>
        <label> Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)} />
                  <br></br>

        <label> Image: </label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={(event) => setImage(event.target.value)} />
                  <br></br>

        <label>Select Category</label>
        <br></br>
        <Select
          onChange={(e) => setCategory(e.value)}
          options={categoryOptions}
          placeholder="What best describes this spot?"
          >
        </Select>
        <label> Where is this located? </label>
        <br></br>
          <Select
          options={locationOptions}
          placeholder="Choose a neighborhood"
          onChange={(e) => setLocation(e.value)}
          />
        <label> Price Point? </label>
        <br></br>
      <Select
        options={priceOptions}
        placeholder="Name a price"
        onChange={(e) => setPrice(e.value)}
        />
      
        <p>Find your spot on the map & click to add its coordinates </p>
        <label>Latitude:</label>
        <input 
          type="text"
          name="name"
          value={lat}>
        </input>
        <label>Longitude:</label>
        <input 
          type="text"
          name="name"
          value={lng}>

        </input>
        <ReviewForm/>
        <button 
        type="submit"
        name="submit"
        value="Join!"> 
        <strong>Enter!</strong>
    </button>
      </form>
    </div>
  )
}

export default NewSpotForm