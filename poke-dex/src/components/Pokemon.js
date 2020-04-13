import React, {useEffect, useState} from 'react';
import PokemonsData from './PokemonsData';
import {Card, Col, Row, Container, CardImg} from 'react-bootstrap';
import PokemonImage from "./PokemonImage";

const Pokemon = (props) => {

    String.prototype.capitalize = function Cap() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    const pokemonIDGenerator = (pokemon) => {
        if (pokemon.url.length < 37) {
            return pokemon.url.slice(pokemon.url.length - 3, pokemon.url.length).split('/');
        } else {
            return pokemon.url.slice(pokemon.url.length - 4, pokemon.url.length).split('/');
        }
    };

    const showPokemonCards = (pokemonList) => {

        return (
            <div className={"pokemon-list"}>
                {pokemonList.map(pokemon => {
                    return (
                        <Card className={"pokemon-card"} key={pokemonIDGenerator(pokemon)}>
                            <PokemonImage pokeURL={pokemon.url}/>
                            <Card.Body>
                                <Card.Title>
                                    {(pokemon.name).capitalize()} #{pokemonIDGenerator(pokemon)}
                                </Card.Title>
                            </Card.Body>
                            <PokemonsData pokeURL={pokemon.url} />
                        </Card>
                    )
                })}
            </div>
        )
    }

    const filterCards = (pokemonList) => {
        return (
            <div className={"pokemon-list"}>
                {pokemonList.map(pokemon => {
                    return (
                        <Card className={"pokemon-card"} key={pokemonIDGenerator(pokemon.pokemon)}>
                            <PokemonImage pokeURL={pokemon.pokemon.url}/>
                            <Card.Body>
                                <Card.Title>
                                    {(pokemon.pokemon.name).capitalize()} #{pokemonIDGenerator(pokemon.pokemon)}
                                </Card.Title>
                            </Card.Body>
                            <PokemonsData pokeURL={pokemon.pokemon.url} />
                        </Card>
                    )
                })}
            </div>
        )
    };

    useEffect(() => {

    }, [])

    if(props.filterLoad === false) {
        return (
            <>
                <Container>
                    {showPokemonCards(props.allPokemons)}
                </Container>

            </>
        )
    } else {
        return (
            <>
                <Container>
                    {filterCards(props.filteredPokemons)}
                </Container>

            </>
        )
    }


};

export default Pokemon;