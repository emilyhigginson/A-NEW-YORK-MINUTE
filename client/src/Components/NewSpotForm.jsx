import React, { useState } from 'react'

function NewSpotForm() {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [location, setLocation] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [walkin, setWalkin] = useState(null)

  function handleSubmit(event) {
    const newSpot = {
      name, image, location, category, price, walkin
    }
  }

  

  return (
    <div>
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
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          name="category"
          id="select1"
        >
          <option value="Select">Select</option>
          <option value="Food & Drink ">Food & Drink</option>
          <option value="Activity">Activity</option>
          <option value="Fitness">Fitness</option>
          <option value="Tourism">Tourism</option>
        </select>
        <label> Where is this located? </label>
        <br></br>
        <select
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          name="location"
        >
          <option value="Select">Select</option>
          <option value="Chelsea"> Chelsea </option>
          <option value="East Village"> East Village </option>
          <option value="Flatiron">Flatiron</option>
          <option value="Midtown">Midtown</option>
          <option value="Times Square">Times Square</option>
          <option value="West Village">West Village</option>
        </select>
        <label> Pricepoint? </label>
        <br></br>
        <select
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          name="price"
        >
          <option value="Select">Select</option>
          <option value="$"> $ </option>
          <option value="$$"> $$ </option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
          <option value="$$$$$">$$$$$</option>
        </select>
        <label> Do you need a reservation/appointment? </label>
        <br></br>
        <select
          onChange={(e) => setWalkin(e.target.value)}
          value={walkin}
          name="walkin"
        >
          <option value="Select">Select</option>
          <option value="true"> yes </option>
          <option value="false"> no </option>
        </select>
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