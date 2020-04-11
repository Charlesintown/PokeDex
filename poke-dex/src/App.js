import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Pages from "./components/Pages";
import Pokemon from "./components/Pokemon";
import Navbar from "./components/Navbar";

function App() {

    const[allPokemons, setAllPokemons] = useState([]);
    const[currentPage, setCurrentPage] = useState(1);
    const[pokemonsPerPage, setPokemonsPerPage] = useState(25);
    const[activePage, setActivePage] = useState(1);

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

    const indexOfLast = currentPage * pokemonsPerPage;
    const indexOfFirst = indexOfLast - pokemonsPerPage;
    const currentPokemons = allPokemons.slice(indexOfFirst, indexOfLast);

    const showCurrentPokemons = (pageNumber) => {
        setCurrentPage(prevState => pageNumber);
        setActivePage(prevState => pageNumber);
    };

      return (
          <>
            <Navbar/>
            <Pokemon allPokemons={currentPokemons}/>
            <Pages
                allPokemons={allPokemons.length} pokemonsPerPage={pokemonsPerPage}
                showPokemons={showCurrentPokemons} activePage={activePage}/>
          </>
      );


}

export default App;
