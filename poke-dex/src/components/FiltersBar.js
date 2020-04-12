import React, {useEffect, useState} from 'react';
import axios from "axios";

const FiltersBar = (props) => {

    const [filteredPokemons, setFilteredPokemons] = useState([]);





    useEffect(() => {

    }, [])

    return (
        <>
            <div>
                <div>ogień</div>
                <div>poison</div>
                <div>woda</div>
            </div>
        </>
    )
};

export default FiltersBar;