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

  const [droneData, setDroneData] = useState("<^v^^<x^<v>x<v<^>^v^<v^^<v^>x>><v<<<x>x^^>v<x<<><vxxv<^>xx^>^^<xx^^x^>v^^^^>^xxx^vvx<vv^<>>>v^^^>^vv>>vv>v<^>x<>^xxxvxvx^vv^vxvx<x^<vx<vx><x<vx^>^xxx>><v<^v^<xv^^x>>>xxx<x<>xv<v^>>^v^>>v>vx^>>xx<<^v>xv<<vx>^>><<v>^<^v<vv^<^>v<x<x>vvxv^v<vx<>xx><^^xx>v<<v>v>^>^>v>^x<><<x^^vvx<<^^><^v>vx<v^vvv^v<^<>xv^<x<<x<xx>^<x^>><>v<>^^>v^<xv<v^vxx<<<<><v^x^>^vx^^x^>^x^^>^vx><^^xvv>^^<<^<>^<>^vxvx<xxx^^><^v^>^xv<>>x>^xx<<>><^^<>xv^^xvvv><<v^v^vv^xv<^vx^^v>v^>>vx<x^x>x<<vv^<>^v><^^x<v<^<^^<^<x^xv^x<vxvx^>><x>>xvv><vv<<>^v^^<^vvvx>><<v<<^xv<<vxv^v^v^<<^<>xv^x>x>>><<<xv>x^<<>x<xv^xv^^<xv<><v>^><<<^^x<^v>v<^x>>xvv<>>x^^^x>v^v<^xxvxv><^<vvx^>xxvx>^xx^<<^vv<>x")

  // const instructions = [<Right />, <Left />, <Up />, <Down />, <Camera />]

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
        <Col size={{ span: 5 }}>
          <Button> <Right /></Button>
          <Button><Down /></Button>
          <Button><Up /></Button>
          <Button><Left /></Button>
          <Button><Camera /></Button>
        </Col>
      </Row>
      <Row className={"justify-content-md-center"}>
        <Col size={{ span: 10 }}>
          <Card>
            <Row className={"justify-content-md-center"}></Row>
          </Card>
        </Col>
      </Row>
      <hr />
      <Row>
        {droneData.length ? <Grid droneData={droneData}></Grid> : null}
      </Row>
    </Container>

  </div >
  );
}
export default App;
