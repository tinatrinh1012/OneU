import React from 'react'

function CareerOptions() {
    return <div>
        <select id="schoolList" onchange="school()">
                <option>University of St. Thomas</option>
            </select>
            <p></p>
            <select id="majorList" onchange="major()">
                <option>Entrepreneurship</option>
            </select> 

            <br/>
            <button className='btn btn-primary' >Explore Mentors</button>
    </div>
}

export default CareerOptions