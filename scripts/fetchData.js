import { renderHTML } from "./renderHTML.js";
import { CheckError } from "./errorStates.js";
import { checkState } from "./states.js";

const api_url = "https://www.rijksmuseum.nl/api/nl/collection?key=ixmhN4my&ps=10&imgonly=true"
export const loadingText = document.getElementById("loadingText");;

onload = fetchData(api_url);

function fetchData(url){
    checkState("#loading");
    loadingText.textContent = "Loading";
    fetch(url)
        .then(CheckError)
        .then(function(collection){
            checkState("#paintings");
            renderHTML(collection);
        })
        .catch((error) => {
            console.log(error);
        });
}