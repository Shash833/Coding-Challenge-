import React, { useState } from 'react';
import Cells from './Components/Grid'
import Container from './Components/GridContainer'
import Scale from './Components/Scale'
import './App.css';

function App() {
  const grid = []

  const [droneData, setDroneData] = useState("<^v^^<x^<v>x<v<^>^v^<v^^<v^>x>><v<<<x>x^^>v<x<<><vxxv<^>xx^>^^<xx^^x^>v^^^^>^xxx^vvx<vv^<>>>v^^^>^vv>>vv>v<^>x<>^xxxvxvx^vv^vxvx<x^<vx<vx><x<vx^>^xxx>><v<^v^<xv^^x>>>xxx<x<>xv<v^>>^v^>>v>vx^>>xx<<^v>xv<<vx>^>><<v>^<^v<vv^<^>v<x<x>vvxv^v<vx<>xx><^^xx>v<<v>v>^>^>v>^x<><<x^^vvx<<^^><^v>vx<v^vvv^v<^<>xv^<x<<x<xx>^<x^>><>v<>^^>v^<xv<v^vxx<<<<><v^x^>^vx^^x^>^x^^>^vx><^^xvv>^^<<^<>^<>^vxvx<xxx^^><^v^>^xv<>>x>^xx<<>><^^<>xv^^xvvv><<v^v^vv^xv<^vx^^v>v^>>vx<x^x>x<<vv^<>^v><^^x<v<^<^^<^<x^xv^x<vxvx^>><x>>xvv><vv<<>^v^^<^vvvx>><<v<<^xv<<vxv^v^v^<<^<>xv^x>x>>><<<xv>x^<<>x<xv^xv^^<xv<><v>^><<<^^x<^v>v<^x>>xvv<>>x^^^x>v^v<^xxvxv><^<vvx^>xxvx>^xx^<<^vv<>x")

  function findCoordinates(droneData) {
    //Empty array to store photographed locations (coordinates)
    let xLocations = []
    let yLocations = []
    let coordinates = []

    //Starting coordinates for drone locations; [lat, long]
    let xSpot = 0
    let ySpot = 0

    //Function check if coordinates have already been photographed, if not add to array of locations: 
    function addLocation(newXLocation, newYLocation) {
      for (let j = 0; j < xLocations.length + 1; j++) {
        //Check for matching coordinates, break array if a match is found
        if (JSON.stringify(xLocations[j]) === JSON.stringify(newXLocation) && JSON.stringify(yLocations[j]) === JSON.stringify(newYLocation)) {
          break;
        }
        //If end of array has been reached with no matching coordinates, add 'newLocation'
        if (j === xLocations.length) {
          xLocations.push(newXLocation)
          yLocations.push(newYLocation)
          coordinates.push(JSON.stringify([newXLocation, newYLocation]))
          break;
        }
      }
    }

    //Function to find photographed coordinates and update coordinates according to symbols
    //When 'x', push location coordinates to locations array
    function findLocation(droneData) {
      for (let i = 0; i < droneData.length + 1; i++) {
        //Update y coordinate 
        if (droneData[i] === "^") {
          ySpot = ySpot + 1
        }
        if (droneData[i] === "v") {
          ySpot = ySpot - 1
        }
        //Update x coordinate
        if (droneData[i] === ">") {
          xSpot = xSpot + 1
        }
        if (droneData[i] === "<") {
          xSpot = xSpot - 1
        }
        //Check coordinates at 'x' 
        if (droneData[i] === "x") {
          let newXLocation = parseInt(xSpot)
          let newYLocation = parseInt(ySpot)
          addLocation(newXLocation, newYLocation)
        }
        //Create grid using coordinates of locations photographed at least once
        if (i === droneData.length) {
          console.log("Photographed billboard x coordinates:", xLocations)
          console.log("Photographed billboard y coordinates:", yLocations)
          console.log("Coordinates", coordinates)
          createGrid({ xLocations, yLocations, coordinates })
        }
      }
    }
    findLocation(droneData)
  }

  function createGrid({ coordinates }) {
    for (let y = 10; y >= -11; y--) {
      console.log("COORDINATES", coordinates)
      const row = [<Scale>{y === -11 ? null : "y=" + y}</Scale>];
      for (let x = -10; x < 11; x++) {
        if (y === -11) {
          row.push(<Scale>{"x=" + x}</Scale>)
        }
        else { row.push(<Cells>{coordinates.indexOf(JSON.stringify([x, y])) === -1 ? null : "x"}</Cells>) }

      }
      grid.push(<Container>{row}</Container>)
    }
  }

  findCoordinates(droneData)

  return (
    <div>
      {grid}
    </div>
  );
}
export default App;
