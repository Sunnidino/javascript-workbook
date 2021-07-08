import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          count: 0,
          inputValue: '',
          checkList: []
      }
  }

  // state = {
  //     count: 0
  // };
  handleClick(){
     const count = this.state.count + 1;
     this.setState({count: count})
  }
  handleInputChange(e) {
      this.setState({inputValue: e.target.value})
  }
  handleClearInput(){
      this.setState({inputValue: ''})
  }
  handleListItem (){
    const newItem = this.state.inputValue;
      this.setState({
        checkList:[...this.state.checkList, newItem]
      })
      console.log(this.state.checkList);
  }
// Creaeted a new function to display check list
  displayItems = () => this.state.checkList.map((item, i) =>{
    return <li key={i}>{item}</li>
  })
// Attempted to reset button to clear list.
resetForm = () => {
  {this.handleListItem.reset()};
}



  render() {
    return (
        <div>
            <h2>To Do List{this.state.count}</h2>
            <button onClick={()=> this.handleClick()}>Increase the count</button>
            <input type="text"
                value={this.state.inputValue}
                onChange={(e)=> this.handleInputChange(e)}
            />
            <button onClick={()=> this.handleListItem()}> Add List Item </button>//button allows input to be submitted
            <button onClick={()=> this.handleClearInput()}>Clear your input</button> // Clears placeholder of input.
            <div><ul>{this.displayItems()}</ul></div> //div placement for the list
            <button onClick={()=> this.resetForm()}>Clear List</button>//attempt to clear and reset the form to original state.
        </div>

    )
  }
}

export default App;
