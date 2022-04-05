import React, {Component} from 'react'
import FilterCard from './FilterCard';
import Select from 'react-select'
import MyTimer from './MyTimer'

function Filter({spotArray, setCategoryInput, setLocationInput, setPriceInput, handleSubmit}) {

    const categoryOptions = [
        { value: "Down for Anything", label: "Down for Anything" },
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
        {value: "$ (no cost)", label: "$ (no cost)"},
        {value: "$$", label: "$$"},
        {value: "$$$", label: "$$$"},
        {value: "$$$$", label: "$$$$"},
        {value: "$$$$$ (go hard or go home)", label: "$$$$$ (go hard or go home)"}
    ]

      function handleCategoryChange(event){
          setCategoryInput(event.value)
      }

      function handleLocationChange(event){
          setLocationInput(event.value)
    }
      function handlePriceChange(event){
          setPriceInput(event.value)
        }


        
        const spots = spotArray.map(spot=> <FilterCard key={spot.id} name={spot.name} location={spot.location} category={spot.category} price={spot.price_range} walkin={spot.walk_in} image={spot.image}/>)

  return (
    <div>
        <MyTimer/>
        <h1>What's the vibe? Tell us below and we'll help you pick where to go. 
        </h1>
        <form onSubmit={handleSubmit}>
        <label>What are you looking for?</label>
        <Select 
        options={categoryOptions}
        placeholder="Down for Anything"
        onChange={handleCategoryChange}
        />
        <br></br>
        <lable>Where do youy want to be?</lable>
        <Select
        options={locationOptions}
        placeholder="Anywhere and Everywhere"
        onChange={handleLocationChange}
        />
        <br></br>
        <lable>What's the budget?</lable>
        <Select
        options={priceOptions}
        placeholder="Name a price"
        onChange={handlePriceChange}
        />
        </form>
        {/* Display spot cards here */}
        {spots}
    </div>
  )
}

export default Filter