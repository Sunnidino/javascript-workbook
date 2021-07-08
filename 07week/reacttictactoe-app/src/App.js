import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

'use strict';
{/*  - Create player X and player O (already completed)
    - Create board (already completed)
    - Whiteboard all possible wins. There are 8 possible ways to win on the board.
    - Write if statements for each possible line that will win.  Horizontal, vertical and diagonal.
    - Check for wins each time playerTurn.
    - Return win for the playerTurn that hits a possible win function
    - Reset board after win.  */}

class App extends React.Component {
  constructor(props) {
      super(props);
        this.state = {
          playerTurn: 'X',
        }
    }

    checkForWin = (newState) => {
      const wins = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
      ];
    return wins.some(possibleWin =>{
      return possibleWin.every(index =>{
        return newState[`cell${index}`] === newState.playerTurn
      })
     })
    }

    handleClick = (cell) =>{
      const newState = {...this.state}
      if(!newState[cell]){
        newState[cell] = this.state.playerTurn
        newState.playerTurn = this.state.playerTurn === 'X' ? 'O' : 'X';
        if(this.checkForWin(newState)){
          alert('winner winner chicken dinner')
        }
        this.setState(newState)
        console.log(this.state);
      }
    }


  render() {
    return (
      <div>
        <h1>Tic Tac Toe React</h1>
          <div className="row">
            <div data-cell="0" onClick={()=>this.handleClick('cell0')}>{this.state.cell0}</div>
            <div data-cell="1" onClick={()=>this.handleClick('cell1')}>{this.state.cell1}</div>
            <div data-cell="2" onClick={()=>this.handleClick('cell2')}>{this.state.cell2}</div>
          </div>
          <div className="row">
            <div data-cell="3" onClick={()=>this.handleClick('cell3')}>{this.state.cell3}</div>
            <div data-cell="4" onClick={()=>this.handleClick('cell4')}>{this.state.cell4}</div>
            <div data-cell="5" onClick={()=>this.handleClick('cell5')}>{this.state.cell5}</div>
          </div>
          <div className="row">
            <div data-cell="6" onClick={()=>this.handleClick('cell6')}>{this.state.cell6}</div>
            <div data-cell="7" onClick={()=>this.handleClick('cell7')}>{this.state.cell7}</div>
            <div data-cell="8" onClick={()=>this.handleClick('cell8')}>{this.state.cell8}</div>
          </div>
      </div>
    );
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
