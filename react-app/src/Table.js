import React from 'react'
import FetchButton from './FetchButton'

 function Table(props) {
 console.log(props.foodItem)

    return(
       
        <div>
        <FetchButton viewFoodItems={props.viewFoodItems}/>
        {props.foodItem.map(food => {
            return(
                
        <div>
           {console.log(food.fats)}
            {food.fats}
            
        </div>
            )
        
        })}
        
        </div>
    )
 }
 
export default Table

