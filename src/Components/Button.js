import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const StyledButton = styled(Button)`
margin: 20px;
`;

function Buttons({ children }) {
    return (
        <>
            <StyledButton>
                {children}
            </StyledButton>
        </>
    )
}
export default Buttons