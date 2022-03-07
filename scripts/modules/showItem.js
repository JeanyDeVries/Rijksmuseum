import { dataMuseum } from "./getItemData.js";
import { getDataID } from "./getItemData.js";

export function showItem(id, object){
    getDataID(id);
    console.log(dataMuseum);
    setTimeout(() => {      
        popUp(object);
    }, 700);    
    location.hash = "showArtPiece/" + id;
}

function popUp(){
    var artPiece = document.getElementById("artPiece");
    var span = document.getElementsByClassName("close")[0];

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
        <h3>${dataMuseum.artObject.dating.presentingDate}</h3>
        <p>${dataMuseum.artObject.description}</p>`)
}

function removeContent(){
    location.hash = "showArtPiece";
    while (artPieceContent.firstChild) {
        artPieceContent.removeChild(artPieceContent.firstChild);
    }
}