import { renderHTML } from "./renderHTML.js";
import { CheckError } from "./errorStates.js";
import { changeState } from "./app.js";

export let dataMuseum = null;

export function fetchData(url, state){
    changeState("loading");
    fetch(url)
        .then(response => {
            if(response.ok)
                return response.json();
            else
                CheckError(response)
        })
        .then(function(collection){
            switch (state){
                case "paintings":
                    renderHTML(collection);
                    break;
                case "item":
                    dataMuseum = collection;
                    break;
                case "search":
                    console.log("fetch search")
                    break;
            }
        })
        .catch((error) => {
            console.log(error);
        });
}