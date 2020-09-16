import React, { useState } from 'react';
import Header from "./Components/Header"
import Container from "./Components/Container"
import Grid from './Components/Grid'
import './App.css';

function App() {
  const [droneData, setDroneData] = useState("<^v^^<x^<v>x<v<^>^v^<v^^<v^>x>><v<<<x>x^^>v<x<<><vxxv<^>xx^>^^<xx^^x^>v^^^^>^xxx^vvx<vv^<>>>v^^^>^vv>>vv>v<^>x<>^xxxvxvx^vv^vxvx<x^<vx<vx><x<vx^>^xxx>><v<^v^<xv^^x>>>xxx<x<>xv<v^>>^v^>>v>vx^>>xx<<^v>xv<<vx>^>><<v>^<^v<vv^<^>v<x<x>vvxv^v<vx<>xx><^^xx>v<<v>v>^>^>v>^x<><<x^^vvx<<^^><^v>vx<v^vvv^v<^<>xv^<x<<x<xx>^<x^>><>v<>^^>v^<xv<v^vxx<<<<><v^x^>^vx^^x^>^x^^>^vx><^^xvv>^^<<^<>^<>^vxvx<xxx^^><^v^>^xv<>>x>^xx<<>><^^<>xv^^xvvv><<v^v^vv^xv<^vx^^v>v^>>vx<x^x>x<<vv^<>^v><^^x<v<^<^^<^<x^xv^x<vxvx^>><x>>xvv><vv<<>^v^^<^vvvx>><<v<<^xv<<vxv^v^v^<<^<>xv^x>x>>><<<xv>x^<<>x<xv^xv^^<xv<><v>^><<<^^x<^v>v<^x>>xvv<>>x^^^x>v^v<^xxvxv><^<vvx^>xxvx>^xx^<<^vv<>x")

  return (<div>
    <Header />
    <Container>
      <Grid droneData={droneData}></Grid>
    </Container>

  </div>
  );
}
export default App;
