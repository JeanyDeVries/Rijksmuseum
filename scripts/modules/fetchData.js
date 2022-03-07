import { renderHTML } from "./renderHTML.js";
import { CheckError } from "./errorStates.js";
import { checkState } from "./app.js";


export function fetchData(url){
    checkState("loading");
    fetch(url)
        .then(response => {
            if(response.status >= 200 && response.status <= 299)
                return response.json();
            else
                CheckError(response)
        })
        .then(function(collection){
            renderHTML(collection);
        })
        .catch((error) => {
            console.log(error);
        });
}