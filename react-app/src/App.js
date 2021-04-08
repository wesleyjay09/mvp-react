import FoodFacts from './FoodFacts'
import React, { Component } from 'react'

import Table from './Table.js'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      food: []
    };
    this.viewFoodItems = this.viewFoodItems.bind(this)
  }
  viewFoodItems() {
    console.log('workding')
    fetch('http://localhost:8000/api/nutrienttracker')
    .then(res => res.json())
    .then(result => this.setState({food:result}))
    
  }

  render(){
    
 return(
  <div> 
    
    <FoodFacts />
    <Table foodItem={this.state.food} viewFoodItems={this.viewFoodItems} />
  </div>
 )
 }
}



export default App;

