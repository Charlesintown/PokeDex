import React, {useEffect, useState} from 'react';
import { Pagination } from 'react-bootstrap';

const Pages = (props) => {
    let pagesFullOfPokemon = [];
    const numberOfPages =  Math.ceil(props.allPokemons / props.pokemonsPerPage);


    for (let number = 1; number <= numberOfPages; number++) {
        pagesFullOfPokemon.push(
            <Pagination.Item onClick={() => props.showPokemons(number)} key={number} active={number === props.activePage}>
                {number}
            </Pagination.Item>,
        );
    }

    const makeSomePages = () => {
        if(numberOfPages > 10) {
            return (
                <div>
                    <Pagination>
                        <Pagination.First/>
                        {pagesFullOfPokemon}
                        <Pagination.Last/>
                    </Pagination>
                </div>
            )
        }

    };

    return (
        <>
            {makeSomePages()}
        </>
    )
};

export default Pages;