import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Pages from "./components/Pages";
import Pokemon from "./components/Pokemon";
import Navbar from "./components/Navbar";
import FilterBar from "./components/Filters/FilterBar";

function App() {

    const[allPokemons, setAllPokemons] = useState([]);
    const[currentPage, setCurrentPage] = useState(1);
    const[pokemonsPerPage, setPokemonsPerPage] = useState(20);
    const[activePage, setActivePage] = useState(1);
    const[pokeAPI, setPokeAPI] = useState(`https://pokeapi.co/api/v2/pokemon/?limit=251`);
    const[filtersLoad, setFiltersLoad] = useState(false);
    const[filteredPokemons, setFiltersPokemons] = useState([])


    useEffect(() => {
        axios.get(pokeAPI)
            .then(res => {
                if(filtersLoad === false) {
                    console.log(res.data.results);
                    setAllPokemons(res.data.results);
                } else {
                    console.log(res.data.pokemon);
                    setFiltersPokemons(res.data.pokemon)
                }
            })
            .catch(err => {
                console.log(err);
            });
    }, [filtersLoad, pokeAPI]);


    const indexOfLast = currentPage * pokemonsPerPage;
    const indexOfFirst = indexOfLast - pokemonsPerPage;
    const currentPokemons = allPokemons.slice(indexOfFirst, indexOfLast);
    const currentFilter = filteredPokemons.slice(indexOfFirst, indexOfLast);

    const showCurrentPokemons = (pageNumber) => {
        setCurrentPage(prevState => pageNumber);
        setActivePage(prevState => pageNumber);
    };

    const updateFilterAPI = (newAPI) =>{
        setPokeAPI(newAPI);
        setFiltersLoad(true);
    };

    const changeDisplayAmount = (amount) => {
        setPokemonsPerPage(amount)
    };


        return (
            <>
                <Navbar/>
                <FilterBar updateAPI={updateFilterAPI}/>
                <Pokemon allPokemons={currentPokemons} filterLoad={filtersLoad} filteredPokemons={currentFilter}
                         changeDisplay={changeDisplayAmount}/>
                <Pages
                    allPokemons={allPokemons} pokemonsPerPage={pokemonsPerPage} filterLoad={filtersLoad}
                    showPokemons={showCurrentPokemons} activePage={activePage} filteredPokemons={filteredPokemons}/>
            </>
        );


}

export default App;
