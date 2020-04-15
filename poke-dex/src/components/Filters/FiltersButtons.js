import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";

const FiltersButtons = ({fire, poison, water, reset, grass, electric, normal, bug, dark, dragon,
                        ghost, rock, psychic}) => {

    const elementsListFirst = [[fire, "FIRE", 'fas fa-fire', "fire-btn"], [poison, "POISON", 'fas fa-skull-crossbones', "poison-btn"], [water, "WATER", "fas fa-tint", "water-btn"], [grass, "GRASS", "fas fa-leaf", "grass-btn"], [electric, "ELECTRIC", "fas fa-bolt", "electric-btn"],
                                [normal, "NORMAL", "fas fa-paw", "normal-btn"]];

    const elementsListSecond = [[bug, "BUG", "fas fa-bug", "bug-btn"], [dark, "DARK", "fas fa-moon", "dark-btn"], [dragon, "DRAGON", "fas fa-dragon", "dragon-btn"], [ghost, "GHOST", "fas fa-ghost", "ghost-btn"],
                                [rock, "ROCK", "fas fa-mountain", "rock-btn"], [psychic, "PSYCHIC", "fas fa-brain", "psychic-btn"]];


    const showHideFilters = (e) => {
        e.preventDefault();
        e.target.classList.toggle("active");
        const filters = document.querySelector(".all-filters");
        if(filters.style.maxHeight) {
            filters.style.maxHeight = null;
        } else {
            filters.style.maxHeight = filters.scrollHeight + "px";
        }
    };

    return (
        <>
            <Container  className={"filter-bar"}>
                <Row>
                    <Col>
                        <button className={"dropdown-btn"} onClick={showHideFilters}>
                            SHOW FILTERS <i className="fas fa-align-left"></i>
                        </button>
                    </Col>
                </Row>
                <div className={"all-filters"}>
                    <Row>
                        {elementsListFirst.map(pair => {
                            return (
                                <Col xs={2} className={`btn-col ${pair[3]}`}>
                                    <div className={"element-btn"} onClick={pair[0]}>
                                        <i className={`${pair[2]}`}></i><br/>
                                    </div>
                                    <p>{pair[1]}</p>
                                </Col>
                            )
                        })}
                    </Row>
                    <Row>
                        {elementsListSecond.map(pair => {
                            return (
                                <Col xs={2} className={`btn-col ${pair[3]}`}>
                                    <div className={"element-btn"} onClick={pair[0]}>
                                        <i className={`${pair[2]}`}></i><br/>
                                    </div>
                                    <p>{pair[1]}</p>
                                </Col>
                            )
                        })}
                    </Row>
                    <Row>
                        <Col className={"btn-col all-btn"}>
                            <div className={"element-btn"} onClick={reset}>
                                <i className={"fas fa-asterisk"}></i>
                            </div>
                            <p>SHOW'EM ALL!</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
};

export default FiltersButtons;