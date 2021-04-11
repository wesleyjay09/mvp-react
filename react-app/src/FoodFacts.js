import React from 'react'


function FoodFacts(props, state){
    console.log(props)
    return(
        
        <div class="fields">
            <input  placeholder="Lifter Name..." type='text' 
            value={state.lifterData} onChange={props.handleChange}
            ></input>
            <button id="button" onClick={() => props.newLifter()} >Submit</button>
            <button id="button" onClick={() => props.deleteLifter()}>Delete Lifter</button>
            <button id="button" onClick={() => props.viewLifterData()}>View Lifters</button>
            <br></br>
            <input placeholder="deadlift"  
            value={state.deadlift} onChange={props.handleChangeDeadlift}></input>
            <br></br>
            <input placeholder="benchpress"
            value={state.benchpress} onChange={props.handleChangeBenchpress}></input> 
            <br></br>
            <input placeholder="squat"
            value={state.squat} onChange={props.handleChangeSquat}></input>
            </div>
    )
}


export default FoodFacts;


