import React, { useState } from 'react'
import axios from 'axios'


function ExploreDegrees() {

    const[school, setSchool] = useState('')
    const[major, setMajor] = useState('')
    const[plan, setPlan] = useState([])

    const degreeTable = plan.map((obj)=>{
        return <div>
            <h4>Degree Plan</h4>

            <table className="table table-info">

                <thead>
                    <tr>
                        <th>Fall</th>
                        <th>J-term</th>
                        <th>Spring</th>
                        <th>Summer</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            {obj.freshman1.map((course)=>{
                                return <p>{course}</p>
                            })}
                        </td>

                        <td>
                            {obj.freshmanJ.map((course)=>{
                                return <p>{course}</p>
                            })}
                        </td>

                        <td>
                            {obj.freshman2.map((course)=>{
                                return <p>{course}</p>
                            })}
                        </td>

                        <td>
                            {obj.freshmanS.map((course)=>{
                                return <p>{course}</p>
                            })}
                        </td>
                    </tr>
                </tbody>                    
            </table>
        </div>
    })

    function createPlan(event) {

        event.preventDefault()

        var filter = {
            school: school,
            major: major
        }

        axios.post('/api/user/getplan', filter)
        .then(res=>{
            console.log(res.data)
            setPlan(res.data)
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

            <div id="degreetable">

                {degreeTable}
            </div>

    </div>
}

export default ExploreDegrees