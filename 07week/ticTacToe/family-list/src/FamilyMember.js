import React, { Component } from 'react';
import './App.css';

// class ListItem extends Component {
//   render(){
//     return(
//       <li>{this.props}</li>
//     )
//   }
// }
class ListItem extends React.Component {
  render() {
    return (
      <h1>{this.props.name}</h1>
    );
  }
}

// Specifies the default values for props:
ListItem.defaultProps = {
  name: []
};

// Renders "Hello, Stranger":
ReactDOM.render(
  <ListItem />,
  document.getElementById('member')
);

export familyMember;
