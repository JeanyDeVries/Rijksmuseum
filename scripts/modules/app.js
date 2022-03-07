import { fetchData } from "./fetchData.js";
import { addSearchListeners } from "./search.js";

const api_url = "https://www.rijksmuseum.nl/api/nl/collection?key=ixmhN4my&ps=50&imgonly=true"
export const loadingText = document.getElementById("loadingText");
export const loadingElement = document.getElementById("loadElement");

const errorText = document.getElementById("errorText");
export let currentState = "empty";

onload = checkState(currentState);
addSearchListeners();

window.addEventListener("offline", function() {
    checkState("error");
  });


export function checkState(currentState){
    console.log(currentState)
    switch(currentState){
        case "empty":
            fetchData(api_url, "paintings");
            break;
        case "loading":
            loadingText.textContent = "Loading";
            loadingElement.style.display = "block";   
            errorText.textContent = "";
            break;
        case "paintings":
            loadingElement.style.display = "none";
            errorText.textContent = "";
            loadingText.textContent = "";
            break;
        case "search":
            //hide html elements
            console.log("search")
            break;
        case "error":
            hideArtpieces();
            loadingElement.style.display = "none";
            errorText.textContent = "No Internet";

            //hide html elements
            break;
    }
}

export function changeState(newState){
    currentState = newState;
    checkState();
}

function hideArtpieces(){
    document.querySelectorAll('.art-piece').forEach((artPiece, index)=>{
        artPiece.style.display = "none";
    })
}
