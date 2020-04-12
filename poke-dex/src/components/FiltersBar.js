import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container} from "react-bootstrap";

const FiltersBar = (props) => {

    const [filteredPokemons, setFilteredPokemons] = useState([]);





    useEffect(() => {

    }, [])

    return (
        <>
            <Container>
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <button onClick={props.fire} >ogień</button>
                    <div>poison</div>
                    <div>woda</div>
                </div>
            </Container>

        </>
    )
};

export default FiltersBar;