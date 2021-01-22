import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './DropdownFilter.css'


function ExploreDegrees() {

    const[school, setSchool] = useState('')
    const[major, setMajor] = useState('')
    const[plan, setPlan] = useState([])
    const[planObject, setPlanObject] = useState({})

    const[courses, setCourses] = useState([])

    const FRESHMAN = 0;
    const SOPHOMORE = 1;
    const JUNIOR = 2;
    const SENIOR = 3;
    const FALL = 0;
    const JTERM = 1;
    const SPRING = 2;
    const SUMMER = 3;

    var localPlan = [[[]]];
    
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
            setPlanObject(res.data[0])
            console.log(res.data[0])
            buildLocalPlan();
        }).catch(err=>{
            console.log(err)
        })
    }

    

    function buildLocalPlan() {
        for (let year=FRESHMAN; year <= SOPHOMORE; year++) {
            for (let term=FALL; term <= SUMMER; term++) {
                localPlan[year][term] = planObject.plan[year][term];
            }
        }
    }
    
    var planVariable = {
        major: {major}, 

        testFunction: function() {
            return <div>
                <h4>This is html returned by test function</h4>
                <div>
                    <p>This is freshman fall schedule </p>

                </div>
            </div>
        }
    }

    const degreeTable = plan.map((obj)=>{
        return <div>
            <h4>Degree Plan for {obj.major} major at {obj.school}</h4>

            <div>Test function return {planVariable.testFunction()}</div>

            <table className="table table-info table-bordered">

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

                    <tr>
                        <td>Sophomore row</td>
                    </tr>

                    <tr>
                        <td>Junior row</td>
                    </tr>

                    <tr>
                        <td>Senior row</td>
                    </tr>
                </tbody>                    
            </table>
        </div>
    })

    
    


    

    

    return <div>
            <h5>Explore Degrees</h5>
            <form onSubmit={createPlan}> 

                <select id="schoolList" onChange={()=>{setSchool(document.getElementById('schoolList').value)}}>
                    <option selected disabled>Select a school</option>
                    <option>University of St. Thomas</option>
                    <option>University of Minnesota</option>
                </select>
                <br/>

                <select id="majorList" onChange={()=>{setMajor(document.getElementById('majorList').value)}}>
                    <option selected disabled>Select a major</option>
                    <option>Entrepreneurship</option>
                    <option>Computer Science</option>
                </select> 
                <br/>

                <input id="button" type="submit" value='Create a degree plan' className='btn btn-primary'/>

            </form>
            
            <div id="degreetable" style={{"margin-top": "50px"}}>
                {}
            </div>    

    </div>
}

export default ExploreDegrees