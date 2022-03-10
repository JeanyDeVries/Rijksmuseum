import { fetchData } from "./fetchData.js";

const searchBar = document.getElementById("searchBar");

/* search function */
export function  addSearchListeners() {
    searchBar.addEventListener("keypress", function (e) {
        if(e.key === "Enter")
            search();
    });
}

function search(){
    let searchTerm = searchBar.value;
    const origin = window.location.origin;

    if(searchTerm === ""){
        //If searchterm is empty, go back to the main page
       // window.location.href = origin;
        return;
    }

    //Add the searchterm to the url so that the url is correctly for the fetch
    let url =
        "https://www.rijksmuseum.nl/api/nl/collection?key=2mU4mudb&q=" + searchTerm + "&ps=5";
    location.hash = "resultsSearch/" + searchTerm;
    fetchData(url, "search");
}