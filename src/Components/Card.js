import React from 'react'
import styled from 'styled-components'
import { Card } from 'react-bootstrap'

const StyledCard = styled(Card)`
width: 100%;
height: 100px;
text-align: center;
padding: 10px;
`;

function Cards({ children }) {
    return (
        <>
            <StyledCard>{children}</StyledCard>
        </>
    )
}

export default Cards