import React from 'react'
import FetchButton from './FetchButton'


 function Table(props) {
    return(
       
        <div className="container">
        <FetchButton viewLifterData={props.viewLifterData}/>
        {props.lifterData.map(lifterData => {
            return(
             <div>     
        <div id="stats" key={lifterData.id}>
            <h1>LIFTER {lifterData.lifter}</h1> 
            <h1>DEADLIFT {lifterData.deadlift}lb</h1> 
            <h1>BENCHPRESS {lifterData.benchpress}lb</h1>
            <h1>SQUAT {lifterData.squat}lb</h1> 
            <h1> TOTAL {lifterData.deadlift + lifterData.benchpress + lifterData.squat}lbs</h1>
        </div>
        </div>
            )
        
        })}
        
        </div>
    )
 }
 
export default Table

