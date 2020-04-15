import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";

const Navbar = () => {


    return (
        <>
            <div className={"nav-bar"}>
                <Container>
                    <Row className={"nav-row"}>
                        <Col>
                            <div className={"header-container"}>
                                <h1 className={"nav-head"}>POKEDEX</h1>
                                <p>by CharlesInTown</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
        </div>
        </>
    )
};

export default Navbar;