import React from 'react'
import FetchButton from './FetchButton'


 function Table(props) {
    return(
       
        <div className="container">
        <FetchButton viewFoodItems={props.viewFoodItems}/>
        {props.foodItem.map(food => {
            return(
                
        <div  key={food.id} >
            {food.foodname}
            fats {food.fats}
            pro {food.protien}
            carbs  {food.carbs}
            totacal {food.totalcal}
        </div>
            )
        
        })}
        
        </div>
    )
 }
 
export default Table

