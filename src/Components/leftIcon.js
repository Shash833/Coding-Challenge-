import React from 'react';
import styled from 'styled-components'
import { ArrowLeft } from 'react-bootstrap-icons';

const StyledIcon = styled(ArrowLeft)`
margin: 5px;
`;


function Left() {
    return <StyledIcon />;
}

export default Left