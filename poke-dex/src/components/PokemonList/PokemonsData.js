import React, {useEffect, useState} from 'react';
import axios from 'axios';

const PokemonsData = (props) => {

    const [pokemonType, setPokemonType] = useState(null);
    const [pokemonType2, setPokemonType2] = useState(null);
    const [pokemonHeight, setPokemonHeight] = useState(0);
    const [pokemonWeight, setPokemonWeight] = useState(0);

    useEffect(() => {
        axios.get(props.pokeURL)
            .then(res => {
                console.log(res.data);
                setPokemonType(res.data.types[0].type.name)
                setPokemonHeight(res.data.height)
                setPokemonWeight(res.data.weight)
                if(res.data.types.length > 1) {
                    setPokemonType2(res.data.types[1].type.name)
                }

            })
    }, [])


    return (
        <>
            <div className={"card-data"}>
                <p className={"pokemon-type-1"}>{pokemonType}</p>
                <p className={"pokemon-type-2"}>{pokemonType2}</p>
                <p>Height: {pokemonHeight}</p>
                <p>Weight: {pokemonWeight}</p>
            </div>

        </>
    )
};

export default PokemonsData;