import FoodFacts from './FoodFacts'
import React, { Component } from 'react'
import TotalCal from './TotalCal'
import Table from './Table'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      food: {}
    };
  }



  componentDidMount() {
    fetch('http://localhost:8000/api/nutrienttracker')
    .then(res => res.json())
    .then (
      (result) => {
        this.setState({
          isLoaded: true,
          food: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        })
      }
    )
  }


  render(){
    const { error, isLoaded, food } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>
    } else if(!isLoaded) {
      return <div>Loading...</div>
     } else {
      return (
    <div>
      {this.state.food.map(food =>{
        return(
       <div> {food.foodname} 
       carbs {food.carbs} fats{food.fats} 
       pro {food.protien}  
       total cal{food.totalcal} 
       </div>
       ) 
      })}
      
    <FoodFacts />
    <TotalCal />
    <Table />
    </div>
  );
  }
}
}



export default App;

