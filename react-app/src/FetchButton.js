import React from 'react'


function FetchButton(props) {

    
    return(
        <div>
            <button onClick={() => props.viewFoodItems()}>
                View foods
            </button>
            <div></div>
        </div>

    )
}

export default FetchButton


// const { error, isLoaded, food } = this.state;
// if (error) {
//   return <div>Error: {error.message}</div>
// } else if(!isLoaded) {
//   return <div>Loading...</div>
//  } else {
//   return (
// <div>
//   {this.state.food.map(food =>{
//     return(
//    <div key={food.id}> {food.foodname} 
//    carbs {food.carbs} fats {food.fats} 

//    pro {food.protien}  
//    total cal {food.totalcal} 
//    </div>
//    ) 
//   })}