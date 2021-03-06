import React from "react";
import {Row, Col} from "react-bootstrap";

const SearchInput = (props) => {

    //wyświetlenie kart pokemonów jako output z wyszukiwarki
    const showFoundPokes = () => {
        const titlePokemon = document.querySelectorAll(".card-title");
        const textInput = document.querySelector("#search-pokes");
        for(const el of titlePokemon) {
            if(!(el.innerText).toLowerCase().includes((textInput.value).toLowerCase()))
                el.parentElement.parentElement.style.display = "none";
        }
        textInput.value = "";
        textInput.setAttribute("placeholder", "Click X to clear ->");
        const spinner = document.querySelector(".loader");
        spinner.style.display = "none";
    };

    //wywołanie powyższej funkcji
    const searchForPokes = (e) => {
        e.preventDefault();
        const spinner = document.querySelector(".loader");
        spinner.style.display = "block";
        props.changeDisplay(251);
        setTimeout(showFoundPokes, 2500);
    };

    const resetFilter = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    }

    return (
        <>
            <Row className={"form-row"}>
                <Col>
                    <p>Which <span className={"poke-span"}>POKEMON</span> are you looking for?</p>
                    <p className={"form-info"}>IT MAY TAKES FEW SECONDS..</p>
                    <form  className={"search-input"}>
                        <input id={"search-pokes"} type={"test"}/>
                        <button className={"input-btn element-btn"} onClick={searchForPokes} type={"submit"}>
                            <i className="fas fa-search"></i>
                        </button>
                        <button onClick={resetFilter} className={"input-btn element-btn"}><i className="fas fa-times"></i></button>
                    </form>
                </Col>
            </Row>
            <Row>
                <div className="loader">Lo</div>
            </Row>


        </>
    )
};

export default SearchInput;