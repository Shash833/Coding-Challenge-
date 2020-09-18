import React from 'react'
import styled from 'styled-components'
import Scale from './Scale'
import Container from './GridContainer'

const Cell = styled.div`
border-style: solid;
border-color: black;
height: 40px;
width: 40px;
text-align: center;
`
let grid = []

function Cells({ droneData }) {
    function findCoordinates(droneData) {
        //Empty array to store photographed coordinates
        let coordinates = []
        grid = []

        //Starting coordinates for drone locations; [x,y]
        let xSpot = 0
        let ySpot = 0

        //Function check if coordinates have already been photographed, if not add to array of locations: 
        function addLocation(newLocation) {
            for (let j = 0; j < coordinates.length + 1; j++) {
                //Check for matching coordinates, break array if a match is found
                if (JSON.stringify(coordinates[j]) === JSON.stringify(newLocation)) {
                    break;
                }
                //If end of array has been reached with no matching coordinates, add 'newLocation'
                if (j === coordinates.length) {
                    coordinates.push(JSON.stringify(newLocation))
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
                    let newLocation = [xSpot, ySpot]
                    addLocation(newLocation)
                }
                //Create grid using coordinates of locations photographed at least once
                if (i === droneData.length) {
                    console.log("Coordinates", coordinates)
                    createGrid({ coordinates })
                }
            }
        }
        findLocation(droneData)
    }

    //Create Grid with Cells
    function createGrid({ coordinates }) {
        //x and y coordinates go from -10 to 10. At -11 scale is created
        for (let y = 10; y >= -11; y--) {
            //Array to store row cells
            const row = [<Scale>{y === -11 ? null : "y=" + y}</Scale>];
            for (let x = -10; x < 11; x++) {
                if (y === -11) {
                    row.push(<Scale>{"x=" + x}</Scale>)
                }
                //If current cell coordinates do not exist in 'droneData' leave cell empty, else mark with 'x' 
                else { row.push(<Cell>{coordinates.indexOf(JSON.stringify([x, y])) === -1 ? null : "x"}</Cell>) }
            }
            //push completed rows with cells to grid container
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

export default Cells;