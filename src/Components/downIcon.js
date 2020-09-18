import React from 'react';
import styled from 'styled-components'
import { ArrowDown } from 'react-bootstrap-icons';

const StyledIcon = styled(ArrowDown)`
margin: 5px;
`;


function Down() {
    return <StyledIcon />;
}

export default Down