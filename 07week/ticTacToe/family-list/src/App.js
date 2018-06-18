import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    familyMember: ["Sara", "Bob", "Ray", "Faith"]
 }

 renderFamilyMembers(){
   return this.state.familyMember.map((member, index) => {
     return (
       <li key={index}>
         {member}
       </li>
     )
   }
);
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        {this.renderFamilyMembers()}
        </p>
      </div>
    );
  }
}

export default App;
