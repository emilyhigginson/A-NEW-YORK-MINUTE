import React from 'react'
import Select from 'react-select'
import MyTimer from './MyTimer'
import {Link} from 'react-router-dom'

function Filter(
  {setCategoryInput, setLocationInput, setFreeInput, handleSubmit}) {

    const categoryOptions = [
        { value: "Down for Anything", label: "Down for Anything" },
        { value: "Food & Drink", label: "Food & Drink" },
        { value: "Activity", label: "Activity" },
        { value: "Late Night", label: "Late Night" }
      ];

    const locationOptions = [
        {value: "All", label: "Anywhere & Everywhere"},
        { value: "Chelsea", label: "Chelsea"},
        {value: "East Village", label: "East Village"},
        {value: "Flatiron", label: "Flatiron"},
        {value: "Gramercy", label: "Gramercy"},
        {value: "Kips Bay", label: "Kips Bay"},
        {value: "Lower East Side", label: "Lower East Side"},
        {value: "Midtown", label: "Midtown"},
        {value: "Nolita", label: "Nolita"},
        {value: "Times Square", label: "Times Square"},
        {value: "Union Square", label: "Union Square"},

        {value: "West Village", label: "West Village"}
    ]

    const freeOptions = [
        {value: true, label: "free"},
        {value: false, label: "willing to spend $$$"},
    ]

    function handleSubmit(event){
      event.preventDefault();
    }

      function handleCategoryChange(event){
          setCategoryInput(event.value)
      }

      function handleLocationChange(event){
          setLocationInput(event.value)
    }
      function handleFreeChange(event){
          setFreeInput(event.value)
        }

  return (
    <div>
        <MyTimer/>
        <h1>What's the vibe? Tell us below and we'll help you pick where to go. 
        </h1>
        <h1>In the mood to browse?   <Link to = '/spots'> View all spots </Link> </h1>
        <form onSubmit={handleSubmit}>
        <label>What are you looking for?</label>
        <Select 
        options={categoryOptions}
        placeholder="Down for Anything"
        onChange={handleCategoryChange}
        />
        <br></br>
        <lable>Where do you want to be?</lable>
        <Select
        options={locationOptions}
        placeholder="Anywhere and Everywhere"
        onChange={handleLocationChange}
        />
        <br></br>
        <lable> Price Range?</lable>
        <Select
        options={freeOptions}
        placeholder="Name a price"
        onChange={handleFreeChange}
        />
        </form>
    </div>
  )
}

export default Filter