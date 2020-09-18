import React, { useState } from 'react';
import Header from "./Components/Header"
import Container from "./Components/Container"
import Col from './Components/Column'
import Row from "./Components/Row"
import Card from './Components/Card'
import Grid from './Components/Grid'
import Button from './Components/Button'
import Right from './Components/rightIcon'
import Down from './Components/downIcon'
import Up from './Components/upIcon'
import Left from './Components/leftIcon'
import Camera from './Components/cameraIcon'
import './App.css';

function App() {

  const [droneData, setDroneData] = useState("")

  const [instructions, setInstructions] = useState([])

  const [showGrid, setShowGrid] = useState(false)

  function toggleGrid() {
    if (showGrid === false) {
      setShowGrid(true)
    }
    else {
      setShowGrid(false)
      setDroneData("")
      setInstructions([])
    }
    console.log(showGrid)
  }

  function handleClick({ action }) {
    if (action === "right") {
      setInstructions([instructions, <Right />])
      setDroneData(droneData + ">")
      console.log(instructions)
    }
    if (action === "down") {
      setInstructions([instructions, <Down />])
      setDroneData(droneData + "v")
      console.log(instructions)
    }
    if (action === "up") {
      setInstructions([instructions, <Up />])
      setDroneData(droneData + "^")
      console.log(instructions)
    }
    if (action === "left") {
      setInstructions([instructions, <Left />])
      setDroneData(droneData + ">")
      console.log(instructions)
    }
    if (action === "camera") {
      setInstructions([instructions, <Camera />])
      setDroneData(droneData + "x")
      console.log(instructions)
      console.log(droneData)
    }
  }

  return (<div>
    <Header />
    <Container>
      <Row>
        <Col size={{ span: 12 }}>
          <h2>Drone Instructions</h2>
          <p> Click on the buttons below to send instructions with directions to move to find billboards to photograph. Options include 1km movement north, south, east or west or to take a photograph of a billboard. When drone instructions are finalised and sent to the drone, a grid with billboards photographed at least once will be displayed below. </p>
        </Col>
      </Row>
      <Row className={"justify-content-md-center"}>
        <Col size={{ span: 6 }}>
          <Button onClick={() => handleClick({ action: "right" })}><Right /></Button>
          <Button onClick={() => handleClick({ action: "down" })}><Down /></Button>
          <Button onClick={() => handleClick({ action: "up" })}><Up /></Button>
          <Button onClick={() => handleClick({ action: "left" })}><Left /></Button>
          <Button onClick={() => handleClick({ action: "camera" })}><Camera /></Button>
        </Col>
      </Row>
      <Row className={"justify-content-md-center"}>
        <Col size={{ span: 10 }}>
          <Card>
            <Row className={"justify-content-md-center"}>{instructions}</Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={toggleGrid}>{showGrid ? "Clear Instructions" : "Send Instructions"}</Button>
        </Col>
      </Row>
      <hr />
      <Row>
        {showGrid ? <Grid droneData={droneData}></Grid> : null}
      </Row>
    </Container>

  </div >
  );
}
export default App;
