import React from 'react'
import styled from 'styled-components'

const Scale = styled.div`
border-style: solid;
border-color: white;
height: 40px;
width: 40px;
text-align: center;
color: grey
`
function Scales({ children }) {
    return <Scale>{children}</Scale>
}

export default Scales;