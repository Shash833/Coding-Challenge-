import React from 'react'
import { Col } from 'react-bootstrap'

function Columns({ size, children }) {
    return (
        <>
            <Col md={size}>{children}</Col>
        </>
    )
}

export default Columns