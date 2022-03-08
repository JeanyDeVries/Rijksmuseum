import { fetchData } from "./fetchData.js";

const searchBar = document.getElementById("searchBar");
const paintings = document.getElementById("displayItems");


/* search function */
export function  addSearchListeners() {
    searchBar.addEventListener("keyup", function (e) {
        search();
    });
}

function search(){
    let searchTerm = searchBar.value;
    let url =
        "https://www.rijksmuseum.nl/api/nl/collection?key=2mU4mudb&q=" + searchTerm + "&ps=5";
    fetchData(url, "search");
}