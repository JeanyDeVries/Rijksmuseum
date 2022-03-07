import { loadingElement } from "./fetchData.js";
import { loadingText } from "./fetchData.js";

export function checkState(hash){
    switch(hash){
        case "#loading":
            loadingText.textContent = "Loading";
            loadingElement.style.display = "block";   
            break;
        case "#paintings":
            loadingElement.style.display = "none";
            break;
        case "#paintings/":
            
            break;
        case "#results":
            break;
        case "#error":
            break;
    }
}
