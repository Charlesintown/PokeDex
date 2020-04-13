import React from "react";

const SearchInput = (props) => {

    const showFoundPokes = () => {
        const titlePokemon = document.querySelectorAll(".card-title");
        const textInput = document.querySelector("#search-pokes");
        for(const el of titlePokemon) {
            if(!(el.innerText).toLowerCase().includes((textInput.value).toLowerCase()))
                el.parentElement.parentElement.style.display = "none";

        }
        textInput.value = "";
    };

    const searchForPokes = (e) => {
        e.preventDefault();
        props.changeDisplay(251);
        setTimeout(showFoundPokes, 1500);
    };

    return (
        <>
            <form>
                <input id={"search-pokes"} type={"test"}/>
                <input onClick={searchForPokes} type={"submit"}/>
            </form>
        </>
    )
};

export default SearchInput;