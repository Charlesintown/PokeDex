import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Pokemon from "./components/Pokemon";
import Navbar from "./components/Navbar";

function App() {

    const[allPokemons, setAllPokemons] = useState([]);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=807`)
            .then(res => {
                console.log(res.data.results);
                setAllPokemons(res.data.results);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

      return (
          <>
            <Navbar/>
            <Pokemon allPokemons={allPokemons}/>
          </>
      );


}

export default App;
