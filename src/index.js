import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// replace Square class with functional component --> because Square nly consisted of a render method
// we are writing a function that takes props and returns what should be rendered
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  // store the state in the Board component instead of in each Square
  // this will allow the Board to tell each Square what to display
  // similar to how we made each square display its index earlier
  constructor (props){
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    };
  }
  handleClick(i) {
    // call .slice() to copy the squares array instead of mutating the existing array
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }
  renderSquare(i) {
    //look at the state of each square in the square array
    // passing down two props from Board to Square --> value and onClick
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
