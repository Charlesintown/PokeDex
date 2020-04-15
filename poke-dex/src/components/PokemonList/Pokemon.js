import React from 'react';
import PokemonsData from './PokemonsData';
import {Card, Container} from 'react-bootstrap';
import PokemonImage from "./PokemonImage";
import SearchInput from "../Filters/SearchInput";

const Pokemon = (props) => {

    //pomoc w szybkiej zmianie na wielką literę w stringu
    String.prototype.capitalize = function Cap() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    //generator ID dla poksów
    const pokemonIDGenerator = (pokemon) => {
        if (pokemon.url.length < 37) {
            return pokemon.url.slice(pokemon.url.length - 3, pokemon.url.length).split('/');
        } else {
            return pokemon.url.slice(pokemon.url.length - 4, pokemon.url.length).split('/');
        }
    };

    //funkcja tworząca wszystkie karty z pokemonami w komponencie
    const showPokemonCards = (pokemonList) => {
        return (
            <>
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
            </>
        )
    }

    //funkcja do tworzenia kart wyfiltrowanych pokemonów
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

    if(props.filterLoad === false) {
        return (
            <>
                <Container>
                    <SearchInput changeDisplay={props.changeDisplay} />
                    {showPokemonCards(props.allPokemons)}
                </Container>
            </>
        )
    } else {
        return (
            <>
                <Container>
                    <SearchInput changeDisplay={props.changeDisplay}/>
                    {filterCards(props.filteredPokemons)}
                </Container>
            </>
        )
    }
};

export default Pokemon;