import { renderHTML } from "./renderHTML.js";
import { CheckError } from "./errorStates.js";
import { $ } from "./getElement.js";

const api_url = "https://www.rijksmuseum.nl/api/nl/collection?key=ixmhN4my&ps=10&imgonly=true"
export const stateDisplay = $('section');

onload = fetchData(api_url);

function fetchData(url){
    stateDisplay.textContent = "Loading";
    fetch(url)
        .then(CheckError)
        .then(function(collection){
            renderHTML(collection);
        })
        .catch((error) => {
            console.log(error);
        });
}