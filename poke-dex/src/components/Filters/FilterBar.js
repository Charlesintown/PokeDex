import React from 'react';
import FiltersButtons from "./FiltersButtons";

const FilterBar = (props) => {

    //funkcje zmieniające state API pod filtrowanie wyników
    const showFire = () => {
        const tempAPI = `https://pokeapi.co/api/v2/type/10/`;
        props.updateAPI(tempAPI);
    };

    const showPoison = () => {
        const tempAPI = `https://pokeapi.co/api/v2/type/4/`;
        props.updateAPI(tempAPI);

    };

    const showGrass = () => {
        const tempAPI = `https://pokeapi.co/api/v2/type/12/`;
        props.updateAPI(tempAPI);

    };

    const showElectric = () => {
        const tempAPI = `https://pokeapi.co/api/v2/type/13/`;
        props.updateAPI(tempAPI);

    };

    const showNormal = () => {
        const tempAPI = `https://pokeapi.co/api/v2/type/1/`;
        props.updateAPI(tempAPI);

    };

    const showBug = () => {
        const tempAPI = `https://pokeapi.co/api/v2/type/7/`;
        props.updateAPI(tempAPI);

    };

    const showRock = () => {
        const tempAPI = `https://pokeapi.co/api/v2/type/6/`;
        props.updateAPI(tempAPI);

    };

    const showGhost = () => {
        const tempAPI = `https://pokeapi.co/api/v2/type/8/`;
        props.updateAPI(tempAPI);

    };

    const showPsychic = () => {
        const tempAPI = `https://pokeapi.co/api/v2/type/14/`;
        props.updateAPI(tempAPI);

    };

    const showDragon = () => {
        const tempAPI = `https://pokeapi.co/api/v2/type/16/`;
        props.updateAPI(tempAPI);

    };

    const showDark = () => {
        const tempAPI = `https://pokeapi.co/api/v2/type/17/`;
        props.updateAPI(tempAPI);

    };

    const showWater = () => {
        const tempAPI = `https://pokeapi.co/api/v2/type/11/`;
        props.updateAPI(tempAPI);

    };

    const resetFitlers = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <>
            <FiltersButtons
                fire={showFire} poison={showPoison} water={showWater} grass={showGrass} reset={resetFitlers}
                electric={showElectric} normal={showNormal} dark={showDark} dragon={showDragon} psychic={showPsychic}
                ghost={showGhost} rock={showRock} bug={showBug}
            />
        </>

    )
};

export default FilterBar;