import React from 'react';
import './App.css';

function calculateWinner(squares)
{
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for(let i=0;i<lines.length;i++)
  {
    const [a,b,c]=lines[i]
    if( squares[a] && squares[a] === squares[b] && squares[a] === squares[c] )
    {
      return a
    }   

  }
  return null
}


function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'Z'
}

function calculateStatus(winner,squares,nextValue) {
  return winner ? `Winner: ${winner}` : squares.every(Boolean) ? `Scratch: Cat's game` : `Next player: ${nextValue}`
}

function Board() {
  const [squares,setSquares] = React.useState(Array(9).fill(null))

  const nextValue = calculateNextValue(squares)
  const winner = calculateWinner(squares)
  const status = calculateStatus(winner, squares, nextValue)

  function selectSquare(square) 
  {
    if (winner || squares[square])
    {
      return
    }
    const squareCopy = [...squares]
    squareCopy[square] = nextValue
    setSquares(squareCopy)
  }

  function restart()
  {
    setSquares(Array(9).fill(null))
  }

  function renderSquare(i) 
  {
    return (
    <button className="square" onClick={ () => selectSquare(i)}>
      {squares[i]}

    </button>
    )
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
      </div>
      <div className="board-row">
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
      </div>
      <div className="board-row">
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
      </div>
      <button className='restart' onClick={restart}>Restart</button>
    </div>
  )
}



function App() {
  return (
    <div className="App">
      hello react
    </div>
  );
}

export default App;
