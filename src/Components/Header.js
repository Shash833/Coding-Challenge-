import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

function Header() {
    return (
        <>
            <Jumbotron fluid>
                <Container>
                    <h1>Drone Challenge</h1>
                </Container>
            </Jumbotron>
        </>
    )
}

export default Header
