import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import DegreePlan from './DegreePlan';
import {BrowserRouter, Route} from 'react-router-dom';
import './Generator.css'
import axios from 'axios'

function ExploreDegrees() {

    const[school, setSchool] = useState('')
    const[major, setMajor] = useState('')


    function createPlan(event) {

        event.preventDefault()

        var filter = {
            school: school,
            major: major
        }

        axios.post('/api/user/getplan', filter)
        .then(res=>{
            console.log(res)
            
        }).catch(err=>{
            console.log(err)
        })

    }

    return <div>
            <h5>Explore Degrees</h5>
            <form onSubmit={createPlan}>

                <select id="schoolList" onChange={()=>{setSchool(document.getElementById('schoolList').value)}}>
                    <option value="">Select a school</option>
                    <option>University of St. Thomas</option>
                    <option>University of Minnesota</option>
                </select>
                <br/>

                <select id="majorList" onChange={()=>{setMajor(document.getElementById('majorList').value)}}>
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