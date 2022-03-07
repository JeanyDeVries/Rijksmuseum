import { fetchData } from "./fetchData.js";
import { addSearchListeners } from "./search.js";

const api_url = "https://www.rijksmuseum.nl/api/nl/collection?key=ixmhN4my&ps=50&imgonly=true"
export const loadingText = document.getElementById("loadingText");
export const loadingElement = document.getElementById("loadElement");

const errorText = document.getElementById("errorText");


onload = checkState("empty");
addSearchListeners();

window.addEventListener("offline", function() {
    checkState("error");
  });


export function checkState(state){
    console.log(state);
    switch(state){
        case "empty":
            fetchData(api_url);
            break;
        case "loading":
            loadingText.textContent = "Loading";
            loadingElement.style.display = "block";   
            errorText.textContent = "";
            break;
        case "paintings":
            loadingElement.style.display = "none";
            errorText.textContent = "";

            break;
        case "search":
            //hide html elements
            break;
        case "error":
            hideArtpieces();
            loadingElement.style.display = "none";
            errorText.textContent = "No Internet";


            //hide html elements
            break;
    }
}

function hideArtpieces(){
    document.querySelectorAll('.art-piece').forEach((artPiece, index)=>{
        artPiece.style.display = "none";
    })
}
