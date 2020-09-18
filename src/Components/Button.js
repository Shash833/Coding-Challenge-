import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const StyledButton = styled(Button)`
margin: 20px;
`;

function Buttons({ onClick, children }) {
    return (
        <>
            <StyledButton onClick={onClick}>
                {children}
            </StyledButton>
        </>
    )
}
export default Buttons