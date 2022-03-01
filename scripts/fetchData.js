import { renderHTML } from "./renderHTML.js";
import { CheckError } from "./errorStates.js";
import { $ } from "./getElement.js";
import { checkState } from "./states.js";

const api_url = "https://www.rijksmuseum.nl/api/nl/collection?key=ixmhN4my&ps=10&imgonly=true"
export const stateDisplay = $('section');

onload = fetchData(api_url);

function fetchData(url){
    checkState("#loading");
    stateDisplay.textContent = "Loading";
    fetch(url)
        .then(CheckError)
       /* .then(response => {
            CheckError(response);
            checkState("#error");
        })*/
        .then(function(collection){
            checkState("#paintings");
            renderHTML(collection);
        })
        .catch((error) => {
            console.log(error);
        });
}