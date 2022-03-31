import React from 'react'
import { useState } from 'react';

const AgeList = ({ add }) => {
    const [age, setAge] = useState('age');
    //const [date, setDate] = useState("date");


  
  return (
    <div>
        <h4>Covid cases by Age</h4>
        <form>
            <label for="age_group">Select age group : </label>
            <select value={age} onChange={(e) => setAge(e.target.value)}>
              <item value="70 years old and above">70 years old and above</item>
              <item value="60 - 69 years old">60 - 69 years old</item>
              <item value="40 - 59 years old">40 - 59 years old</item>
              <item value="20 - 39 years old">20 - 39 years old</item>
              <item value="12 - 19 years old">12 - 19 years old</item>
              <item value="0 - 11 years old">0 - 11 years old</item>
            </select>
        </form> 

    </div>
  )
}

export default AgeList;
