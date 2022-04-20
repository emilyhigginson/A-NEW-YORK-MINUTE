import React, { useState } from 'react'
import Select from 'react-select'
import ReviewForm from './ReviewForm'
import Map from './Map'

function NewSpotForm({ onFormSubmit }) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [location, setLocation] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [lat, setLat] = useState("")
  const [lng, setLng] = useState("")

  function handleSubmit(event) {
    const newSpot = {
      name, image, location, category, price
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
    { value: "Late Night", label: "Late Night" },
  ];

  const locationOptions = [
    { value: "Central Park", label: "Central Park" },
    { value: "Chelsea", label: "Chelsea" },
    { value: "East Village", label: "East Village" },
    { value: "Flatiron", label: "Flatiron" },
    { value: "Gramercy", label: "Gramercy" },
    { value: "Greenwich Village", label: "Greenwich Village" },
    { value: "Kips Bay", label: "Kips Bay" },
    { value: "LES", label: "Lower East Side" },
    { value: "Midtown", label: "Midtown" },
    { value: "Noho", label: "Noho" },
    { value: "Nolita", label: "Nolita" },
    { value: "Soho", label: "Soho" },
    { value: "The Bowery", label: "The Bowery" },
    { value: "Times Square", label: "Times Square" },
    { value: "Union Square", label: "Union Square" },
    { value: "Upper West Side", label: "Upper West Side" },
    { value: "West Village", label: "West Village" }
  ]

  const priceOptions = [
    { value: true, label: "free " },
    { value: false, label: "$$$" },
  ]
  return (
    <>
      <div className='spotPage'>

        <h1 id="saveheader">No Gatekeeping Here! <br></br>
          Add your favorite NYC spot!
        </h1>
      </div>
      <div id='newspotcontainer'>
        <div>
          <Map setLng={setLng} setLat={setLat} />
        </div>
        <form id='newform' onSubmit={handleSubmit}>
          <h3>Tell us all about it:</h3>
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
          {/* <ReviewForm/> */}
          <br></br>
          <button
            type="submit"
            name="submit"
            value="Join!">

            <strong>Enter!</strong>
          </button>
        </form>

      </div>
    </>
  )
}

export default NewSpotForm