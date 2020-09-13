import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justifyContent: center
`
function GridContainer({ children }) {
    return <Container>{children}</Container>
}

export default GridContainer;