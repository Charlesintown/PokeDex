import React, {useEffect, useState} from 'react';
import Pagination from "react-js-pagination";



const Pages = (props) => {

    return (
        <>
            <div>
                <Pagination
                    activePage={props.activePage}
                    itemsCountPerPage={props.pokemonsPerPage}
                    totalItemsCount={props.allPokemons.length}
                    pageRangeDisplayed={10}
                    onChange={props.showPokemons}
                    prevPageText={"Prev"}
                    nextPageText={"Next"}
                    firstPageText={"First"}
                    lastPageText={"Last"}
                />
            </div>

        </>
    )

};

export default Pages;