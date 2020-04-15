import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card} from 'react-bootstrap';

const PokemonImage = (props) => {

    const [pokemonImg, setPokemonImg] = useState(null);

    //pobranie wszystkich obrazów naszych stworków
    useEffect(() => {
        axios.get(props.pokeURL)
            .then(res => {
                console.log(res.data);
                setPokemonImg(res.data.sprites.front_default)
            })
    }, []);

    return (
        <Card.Img src={pokemonImg} />
    )
};

export default PokemonImage;