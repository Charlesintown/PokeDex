import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const Navbar = () => {


    return (
        <>
            <div className={"nav-bar"}>
                <Container>
                    <Row className={"nav-row"}>
                        <Col>
                            <div className={"header-container"}>
                                <Link to={'/'} className={"nav-head"}>POKEDEX</Link>
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