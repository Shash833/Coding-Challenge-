import React from 'react'
import { Row } from 'react-bootstrap'

function Rows({ children, className }) {
    return (
        <>
            <Row className={className}>{children}</Row>
        </>
    )
}

export default Rows