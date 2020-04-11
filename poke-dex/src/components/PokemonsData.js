import React, {useEffect, useState} from 'react';
import axios from 'axios';

const PokemonsData = (props) => {

    const [pokeimg, setPokeimg] = useState(null);
    const [pokeType, setPokeType] =useState(null)

    useEffect(() => {
        axios.get(props.pokeURL)
            .then(res => {
                console.log(res.data.types);
                setPokeimg(res.data.sprites.front_default)
                setPokeType(res.data.types[0].type.name)
            })
    }, [])

    return (
        <>
            <h1>{pokeType}</h1>
            <img src={pokeimg} />
        </>
    )
};

export default PokemonsData;