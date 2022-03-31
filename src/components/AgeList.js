import React from 'react'
import { useState } from 'react';

const AgeList = ({ add }) => {
    const [age, setAge] = useState('age');
    //const [date, setDate] = useState("date");


  
  return (
    <div>
        <h4>Covid cases by Age</h4>
        <form>
            <label value="age_group">Select age group : </label>
            <button value={age} onChange={(e) => setAge(e.target.value)}>
              <button value="70 years old and above">70 years old and above</button>
              <button value="60 - 69 years old">60 - 69 years old</button>
              <button value="40 - 59 years old">40 - 59 years old</button>
              <button value="20 - 39 years old">20 - 39 years old</button>
              <button value="12 - 19 years old">12 - 19 years old</button>
              <button value="0 - 11 years old">0 - 11 years old</button>
            </button>
        </form> 

    </div>
  )
}

export default AgeList;
