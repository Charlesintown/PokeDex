import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';

const Pokemon = (props) => {

    const pokemonIDGenerator = (pokemon) => {
        if (pokemon.url.length < 37) {
            return pokemon.url.slice(pokemon.url.length - 3, pokemon.url.length).split('/');
        } else {
            return pokemon.url.slice(pokemon.url.length - 4, pokemon.url.length).split('/');
        }
    };

    useEffect(() => {

    }, []);

    return (
        <>
            <ul>
                {props.allPokemons.map(pokemon => {
                    return (
                        <li key={pokemonIDGenerator(pokemon)}>{pokemon.name} id: {pokemonIDGenerator(pokemon)}</li>
                    )
                })}
            </ul>
        </>
    )
};

export default Pokemon;