import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import DegreePlan from './DegreePlan';
import {BrowserRouter, Route} from 'react-router-dom';
import './Generator.css'

function ExploreDegrees() {

    const[school, setSchool] = useState('')
    const[major, setMajor] = useState('')


    function createPlan(event) {

        event.preventDefault()

        alert('This is create plan method')

        var filter = {
            school: school,
            major: major
        }

        console.log(filter)

    }

    return <div>
            <h5>Explore Degrees</h5>

            <form onSubmit={createPlan}>

                <select id="schoolList" value={school} onchange={(e)=>{setSchool(e.target.value)}}>
                    <option>Select a school</option>
                    <option>University of St. Thomas</option>
                    <option>University of Minnesota</option>
                </select>
                <br/>

                <select id="majorList" >
                    <option value="">Select a major</option>
                    <option>Entrepreneurship</option>
                    <option>Computer Science</option>
                </select> 
                <br/>

                <input type="submit" value='Create a degree plan' className='btn btn-primary'/>

            </form>
  
    </div>
}

export default ExploreDegrees