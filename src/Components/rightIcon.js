import React from 'react';
import styled from 'styled-components'
import { ArrowRight } from 'react-bootstrap-icons';

const StyledIcon = styled(ArrowRight)`
margin: 5px;
`;


function Right() {
    return <StyledIcon />;
}

export default Right