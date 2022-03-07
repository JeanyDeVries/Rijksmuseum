import { fetchData } from "./fetchData.js";
import { addSearchListeners } from "./search.js";

const api_url = "https://www.rijksmuseum.nl/api/nl/collection?key=ixmhN4my&ps=50&imgonly=true"
export const loadingText = document.getElementById("loadingText");
export const loadingElement = document.getElementById("loadElement");

onload = checkState("empty");
addSearchListeners();


export function checkState(state){
    console.log(state);

    switch(state){
        case "empty":
            fetchData(api_url);
            break;
        case "loading":
            loadingText.textContent = "Loading";
            loadingElement.style.display = "block";   
            break;
        case "paintings":
            loadingElement.style.display = "none";
            break;
        case "search":
            break;
        case "error":
            break;
    }
}
