import FoodFacts from './FoodFacts'
import React, { Component } from 'react'

import Table from './Table.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      food: [],
      foodname: '',
      carbs: 0,
      fats: 0,
      protien: 0,
      totalcal: 0
    

    };
    this.viewFoodItems = this.viewFoodItems.bind(this)
    this.createFoodItems = this.createFoodItems.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeCarbs = this.handleChangeCarbs.bind(this)
    this.handleChangeFats = this.handleChangeFats.bind(this)
    this.handleChangeProtien = this.handleChangeProtien.bind(this)
  }

  
  handleChange(event) {
    this.setState({foodname: event.target.value})
  }
  handleChangeCarbs(event) {
    this.setState({carbs: event.target.value})
  }
  handleChangeFats(event) {
    this.setState({fats: event.target.value})
  }
  handleChangeProtien(event) {
    this.setState({protien: event.target.value})
  }
  viewFoodItems() {
    fetch('http://localhost:8000/api/nutrienttracker')
    .then(res => res.json())
    .then(result => this.setState({food:result}))
  }

  createFoodItems() {
    fetch('http://localhost:8000/api/nutrienttracker', {
          method: 'POST',
          body:JSON.stringify({'foodname': this.state.foodname, 'carbs': this.state.carbs, 'fats': this.state.fats, 'protien': this.state.protien, 'totalcal':this.state.totalcal }),
          headers: {"Content-type": "application/json; charset=UTF-8"}
      })
  }
  
  deleteFoodItem() {
    
  }
    
  

  render(){
    
 return(
  <div> 
    
    <FoodFacts foodItem={this.state.food} 
    createFoodItems={this.createFoodItems}
    handleChange={this.handleChange}
    handleChangeCarbs={this.handleChangeCarbs}
    handleChangeFats={this.handleChangeFats}
    handleChangeProtien={this.handleChangeProtien}
    
    state={this.state}/>
    <Table foodItem={this.state.food} viewFoodItems={this.viewFoodItems} />
  </div>
 )
 }
}



export default App;

