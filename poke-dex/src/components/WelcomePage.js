import React from 'react';
import {Link} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";

const WelcomePage = () => {

    return (
        <>
            <Container>
                <Row className={"welcome-page"}>
                    <Col className={"link-col"}>
                        <div className={"pokeball"}> </div>
                        <Link to={'/main'}>CHOOSE ME!</Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default WelcomePage;