import React from 'react';
import styled from 'styled-components'
import { CameraFill } from 'react-bootstrap-icons';

const StyledIcon = styled(CameraFill)`
margin: 5px;
`;


function Camera() {
    return <StyledIcon />;
}

export default Camera