import FoodFacts from './FoodFacts'
import React, { Component } from 'react'

import Table from './Table.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      lifterData: [],
      lifter: '',
      deadlift: 0,
      benchpress: 0,
      squat: 0
      
    

    };
    this.viewLifterData = this.viewLifterData.bind(this)
    this.newLifter = this.newLifter.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeDeadlift = this.handleChangeDeadlift.bind(this)
    this.handleChangeBenchpress = this.handleChangeBenchpress.bind(this)
    this.handleChangeSquat = this.handleChangeSquat.bind(this)
    this.deleteLifter = this.deleteLifter.bind(this)
  }

  
  handleChange(event) {
    this.setState({lifter: event.target.value})
  }
  handleChangeDeadlift(event) {
    this.setState({deadlift: event.target.value})
  }
  handleChangeBenchpress(event) {
    this.setState({benchpress: event.target.value})
  }
  handleChangeSquat(event) {
    this.setState({squat: event.target.value})
  }

  
  viewLifterData() {
    fetch('http://localhost:8000/api/thousandlbclub')
    .then(res => res.json())
    .then(result => this.setState({lifterData:result}))
  }

  newLifter() {
    fetch('http://localhost:8000/api/thousandlbclub', {
          method: 'POST',
          body:JSON.stringify({'lifter': this.state.lifter, 'deadlift': this.state.deadlift, 'benchpress': this.state.benchpress, 'squat': this.state.squat }),
          headers: {"Content-type": "application/json; charset=UTF-8"}
      })
  }
  
  deleteLifter() { 
    fetch(`http://localhost:8000/api/thousandlbclub/${this.state.lifter}`, {
      method: 'DELETE'
    })
  }
    
  

  render(){
    
 return(
  <div class="contianer"> 
    
    <FoodFacts lifterData={this.state.lifterData} 
    newLifter={this.newLifter}
    handleChange={this.handleChange}
    handleChangeDeadlift={this.handleChangeDeadlift}
    handleChangeBenchpress={this.handleChangeBenchpress}
    handleChangeSquat={this.handleChangeSquat}
    deleteLifter={this.deleteLifter}
    viewLifterData={this.viewLifterData}
    
    state={this.state}/>
    <Table lifterData={this.state.lifterData} viewLifterData={this.viewLifterData} />
  </div>
 )
 }
}



export default App;

