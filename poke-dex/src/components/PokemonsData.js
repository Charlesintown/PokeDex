import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card, Col, Row, Container, CardImg} from 'react-bootstrap';


const PokemonsData = (props) => {

    const [pokemonType, setPokemonType] = useState(null);
    const [pokemonType2, setPokemonType2] = useState(null);

    useEffect(() => {
        axios.get(props.pokeURL)
            .then(res => {
                console.log(res.data);
                setPokemonType(res.data.types[0].type.name)
                if(res.data.types.length > 1) {
                    setPokemonType2(res.data.types[1].type.name)
                }

            })
    }, [])


    return (
        <>
            <p className={"pokemon-type-1"}>{pokemonType}</p>
            <p className={"pokemon-type-2"}>{pokemonType2}</p>
        </>
    )
};

export default PokemonsData;