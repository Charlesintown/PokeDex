import React, {useEffect, useState} from 'react';
import Pagination from "react-js-pagination";
import {Container} from "react-bootstrap";

const Pages = (props) => {

    const [pageDisplay, setPageDispaly] = useState(0);

    useEffect(() => {
        if(window.innerWidth > 561) {
            setPageDispaly(7);
        } else {
            setPageDispaly(4)
        }
    }, [])

    const paginatePokes = (active, perPage, total, change) => {
        return (
            <div className={"pagination-row"}>
                <Pagination
                    activePage={active}
                    itemsCountPerPage={perPage}
                    totalItemsCount={total}
                    pageRangeDisplayed={pageDisplay}
                    onChange={change}
                    prevPageText={"Prev"}
                    nextPageText={"Next"}
                    firstPageText={"First"}
                    lastPageText={"Last"}
                />
            </div>
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
