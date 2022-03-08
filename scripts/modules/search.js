import { fetchData } from "./fetchData.js";
import { checkState } from "./app.js";

const searchBar = document.getElementById("searchBar");
const paintings = document.getElementById("displayItems");


/* search function */
export function  addSearchListeners() {
    searchBar.addEventListener("keypress", function (e) {
        console.log("yes")
        if(e.key === `Enter`){
            search();
            console.log(":)")
        }
    });
}

function search(){
    let searchTerm = searchBar.value;
    const origin = window.location.origin;

    if(searchTerm === ""){
        window.location.href = origin;
        return;
    }

    let url =
        "https://www.rijksmuseum.nl/api/nl/collection?key=2mU4mudb&q=" + searchTerm + "&ps=5";
    location.hash = "resultsSearch/" + searchTerm;
    fetchData(url, "search");
}