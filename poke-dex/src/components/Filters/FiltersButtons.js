import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";

const FiltersButtons = ({fire, poison, water, reset, grass, electric, normal, bug, dark, dragon,
                        ghost, rock, psychic}) => {

    const elementsListFirst = [[fire, "Fire"], [poison, "Poison"], [water, "Water"], [grass, "Grass"], [electric, "Electric"],
                                [normal, "Normal"]];

    const elementsListSecond = [[bug, "Bug"], [dark, "Dark"], [dragon, "Dragon"], [ghost, "Ghost"],
                                [rock, "Rock"], [psychic, "Psychic"]];

    return (
        <>
            <Container>
                <Row>
                    {elementsListFirst.map(pair => {
                        return (
                            <Col>
                                <button onClick={pair[0]}>{pair[1]}</button>
                            </Col>
                        )
                    })}
                </Row>
                <Row>
                    {elementsListSecond.map(pair => {
                        return (
                            <Col>
                                <button onClick={pair[0]}>{pair[1]}</button>
                            </Col>
                        )
                    })}
                </Row>
                <Row>
                    <Col>
                        <button onClick={reset}>Reset</button>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default FiltersButtons;