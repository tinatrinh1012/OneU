import React from 'react'
import {Link} from 'react-router-dom'

function ExploreDegrees() {
    return <div>
            <select id="schoolList" onchange="school()">
                <option>University of St. Thomas</option>
            </select>
            <p></p>
            <select id="majorList" onchange="major()">
                <option>Entrepreneurship</option>
            </select> 

            <br/>
            <button className='btn btn-primary'>Create a degree plan</button>
  
    </div>
}

export default ExploreDegrees