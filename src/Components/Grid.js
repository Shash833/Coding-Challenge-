import React from 'react'
import styled from 'styled-components'

const Cell = styled.div`
border-style: solid;
border-color: black;
height: 40px;
width: 40px;
text-align: center;
`
function Cells({ children }) {
    return <Cell>{children}</Cell>
}

export default Cells;