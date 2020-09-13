import React from 'react';
import Cells from './Components/Grid'
import Container from './Components/GridContainer'
import Scale from './Components/Scale'
import './App.css';

function App() {
  const grid = []

  function createGrid() {
    for (let i = 10; i >= -11; i--) {
      const row = [<Scale>{i === -11 ? null : "y=" + i}</Scale>];
      for (let j = -10; j < 11; j++) {
        if (i === -11) {
          row.push(<Scale>{"x=" + j}</Scale>)
        }
        else { row.push(<Cells />) }

      }
      grid.push(<Container>{row}</Container>)
    }
  }
  createGrid()

  return (
    <div>
      {grid}
    </div>
  );
}
export default App;
