import { dataMuseum } from "./getItemData.js";
import { getDataID } from "./getItemData.js";

export function showItem(id, object){
    getDataID(id);
    popUp(object);
}

function popUp(object){
    var artPiece = document.getElementById("artPiece");
    var span = document.getElementsByClassName("close")[0];

    object.style.scale = (1, 1);
    artPiece.style.display = "block";

    //When the button or outside is clicked, the display will be hidden
    span.onclick = function() {
        artPiece.style.display = "none";
        removeContent();
    }
    window.onclick = function(event) 
    {
        if (event.target == artPiece) {
            artPiece.style.display = "none";
            removeContent();
        }
    }

    displayContent();
}

var artPieceContent = document.getElementById("content");
function displayContent(){

    //display content
    artPieceContent.insertAdjacentHTML(
        "beforeend",
        `<img src="${dataMuseum.artObject.webImage.url}" alt="${dataMuseum.artObject.title}"/>
        <h2>${dataMuseum.artObject.title}</h2>
        <p>${dataMuseum.artObject.description}</p>`)
}

function removeContent(){
    while (artPieceContent.firstChild) {
        artPieceContent.removeChild(artPieceContent.firstChild);
    }
}
