import React from 'react'
import { useState } from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function DegreePlan() {

    const plans =
        {
          major: 'Entrepreneurship',
          freshman1: ['FYEX 100', 'FYEX 150', 'THEO 100', 'PHIL 110'],
          freshmanJ: ['ENGL 121'],      
          freshman2: ['HIST 111', 'ARTH 110', 'SPAN 111', 'DISJ ???'],      
          freshmanS: ['ECON 251']   
          
        }

    
    const fallList = plans.freshman1.map((object)=>{
        return <p>{object}</p>
    }) 

    const jtermList = plans.freshmanJ.map((object)=>{
        return <p>{object}</p>
    }) 

    const springList = plans.freshman2.map((object)=>{
        return <p>{object}</p>
    }) 

    const summerList = plans.freshmanS.map((object)=>{
        return <p>{object}</p>
    }) 

    return <div>
        <h1>This is the Degree Plan component</h1>
        <p>{plans.major}</p>
        <br/>

        <div className='row'>
            <div className='col-md-3'>
                {fallList}
            </div>
            <div className='col-md-3'>
                {jtermList}
            </div>
            <div className='col-md-3'>
                {springList}
            </div>
            <div className='col-md-3'>
                {summerList}
            </div>
        </div>

    </div>
}

export default DegreePlan