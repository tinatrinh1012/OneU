import React from 'react'
import './DropdownFilter.css'
import ReactDOM from 'react-dom'
import Mentors from './Mentors'


function CareerOptions() {

    function getMentors(event) {
        event.preventDefault()
        
        ReactDOM.render(<Mentors/>, document.getElementById('mentors'))
    }

    return <div>
        <h5>Career Options and Connect with Mentors</h5>

        <form onSubmit={getMentors}>
            <select id="schoolList">
                <option defaultValue>Select a school</option>
                <option>University of St. Thomas</option>
            </select>
            <br/>

            <select id="majorList">
                <option defaultValue>Select a major</option>
                <option>Entrepreneurship</option>
            </select> 
            <br/>
            <input id="button" type="submit" value='Connect with mentors' className='btn btn-primary'/>
        </form>

        <div id="mentors">

        </div>
   
    </div>
}

export default CareerOptions