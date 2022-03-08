import { renderHTML } from "./renderHTML.js";
import { CheckError } from "./errorStates.js";
import { checkState } from "./app.js";
import { renderSearchItems } from "./renderSearchItems.js";

export let dataMuseum = null;

export function fetchData(url, state){
    checkState("loading");
    fetch(url)
        .then(response => {
            if(response.ok)
                return response.json();
            else
                CheckError(response)
        })
        .then(function(collection){
            checkState("paintings");
            switch (state){
                case "paintings":
                    renderHTML(collection);
                    break;
                case "item":
                    dataMuseum = collection;
                    break;
                case "search":
                    renderSearchItems(collection);
                    break;
            }
        })
        .catch((error) => {
            console.log(error);
        });
}