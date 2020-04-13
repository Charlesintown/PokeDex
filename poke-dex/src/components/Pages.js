import React, {useEffect, useState} from 'react';
import Pagination from "react-js-pagination";
import {Container} from "react-bootstrap";

const Pages = (props) => {

    const paginatePokes = (active, perPage, total, change) => {
        return (
            <Pagination
                activePage={active}
                itemsCountPerPage={perPage}
                totalItemsCount={total}
                pageRangeDisplayed={10}
                onChange={change}
                prevPageText={"Prev"}
                nextPageText={"Next"}
                firstPageText={"First"}
                lastPageText={"Last"}
            />
        )
    };

    if(props.filterLoad === false) {
        return (
            <>
                <Container>
                    {paginatePokes(props.activePage, props.pokemonsPerPage, props.allPokemons.length, props.showPokemons)}
                </Container>
            </>
        )
    } else {
        return (
            <>
                <Container>
                    {paginatePokes(props.activePage, props.pokemonsPerPage, props.filteredPokemons.length, props.showPokemons)}
                </Container>
            </>
            )

    }


};

export default Pages;
