import { loadingElement } from "./fetchData.js";
import { loadingText } from "./fetchData.js";

export function checkState(state){
    switch(state){
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
