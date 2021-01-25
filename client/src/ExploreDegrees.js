import React, { useState } from 'react'
import axios from 'axios'
import './DropdownFilter.css'
import ReactDOM from 'react-dom';


function ExploreDegrees() {

    const[school, setSchool] = useState('')
    const[major, setMajor] = useState('')
    //const[plan, setPlan] = useState([])
    //const[planObject, setPlanObject] = useState({'': ''})

    const[courses, setCourses] = useState([])

    const FRESHMAN = 0;
    const SOPHOMORE = 1;
    const JUNIOR = 2;
    const SENIOR = 3;
    const FALL = 0;
    const JTERM = 1;
    const SPRING = 2;
    const SUMMER = 3;

    var localPlan;
    var planArray;

    function createPlan(event) {

        event.preventDefault()

        var filter = {
            school: school,
            major: major
        }

        axios.post('/api/user/getplan', filter)
        .then(res=>{
            //console.log(res.data)
            //setPlan(res.data)
            //setPlanObject(res.data[0])
            //console.log(res.data[0])
            //console.log(planObject.plan.length)
            
            planArray = res.data[0].plan;
            console.log(planArray)
            localPlan = [...planArray];
            console.log(localPlan);
            ReactDOM.render(degreeTable.render(), document.getElementById("degreetable"));

        }).catch(err=>{
            console.log(err)
        })

    }

    var degreeTable = {
        classesRender: function() {

            return <tbody>
                {localPlan.map((year, yearCount) => {
                    return <tr>

                        {year.map((term, termCount) => {
                         
                            return <td>
                                {term.map((course) => {
                                    return <p>{course}</p>
                                })}
                                <button onClick={()=>addCourse(yearCount, termCount)} className="btn btn-success">Add</button>
                            </td>
                            
                        })}
                       
                    </tr>
                    
                })}
            </tbody>
        },

        render: function() {
            return <div>
                <table className="table table-info table-bordered">
                    
                    <thead>
                        <tr>
                            <th>Fall</th>
                            <th>J-term</th>
                            <th>Spring</th>
                            <th>Summer</th>
                        </tr>
                    </thead>

                    {this.classesRender()}

                </table>
                <div>
                    <h1>Test Add Course</h1>
                    <button>Add</button>
                </div>
            </div>
        }
    }
    
    /*
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
    */

    function addCourse(year, term) {
        localPlan[year][term].push("test course")
        console.log(localPlan)
        ReactDOM.render(degreeTable.render(), document.getElementById("degreetable"));
    }
    

    return <div>
            <h5>Explore Degrees</h5>
            <form onSubmit={createPlan}> 

                <select id="schoolList" onChange={()=>{setSchool(document.getElementById('schoolList').value)}}>
                    <option defaultValue>Select a school</option>
                    <option>University of St. Thomas</option>
                    <option>University of Minnesota</option>
                </select>
                <br/>

                <select id="majorList" onChange={()=>{setMajor(document.getElementById('majorList').value)}}>
                    <option defaultValue>Select a major</option>
                    <option>Entrepreneurship</option>
                    <option>Computer Science</option>
                </select> 
                <br/>

                <input id="button" type="submit" value='Create a degree plan' className='btn btn-primary'/>

            </form>
            
            <div id="degreetable" style={{"marginTop": "50px"}}>
                {}
            </div>    

            

    </div>
}

export default ExploreDegrees