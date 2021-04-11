import React from 'react'


function FoodFacts(props, state){
    console.log(props)
    return(
        
        <div>
            <input  placeholder="Enter food here..." type='text' 
            value={state.foodname} onChange={props.handleChange}
            ></input>
            <button onClick={() => props.createFoodItems()} >Submit</button>
            <button onClick={() => props.deleteFoodItem()}>Delete Food</button>
            <input placeholder="fats"  
            value={state.fats} onChange={props.handleChangeFats}></input>
            <br></br>
            <input placeholder="carbs"
            value={state.carbs} onChange={props.handleChangeCarbs}></input> 
            <br></br>
            <input placeholder="portein"
            value={state.protien} onChange={props.handleChangeProtien}></input>
            </div>
    )
}


export default FoodFacts;


