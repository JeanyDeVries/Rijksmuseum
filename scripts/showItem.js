import { dataMuseum } from "./getItemData.js";
import { getDataID } from "./getItemData.js";

export function showItem(id, object){
    getDataID(id);
    console.log(dataMuseum)
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
    }
    window.onclick = function(event) 
    {
        if (event.target == artPiece) {
            artPiece.style.display = "none";
        }
    }

    displayContent();
}

var artPieceContent = document.getElementById("artPiece-content");
function displayContent(){

    //display content
    artPieceContent.insertAdjacentHTML(
        "afterbegin",
        `<img src="${dataMuseum.artObject.webImage.url}" alt="${dataMuseum.artObject.title}"/>
        <h2>${dataMuseum.artObject.title}</h2>`)
}

function removeContent(){

}
