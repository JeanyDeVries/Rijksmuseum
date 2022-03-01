import { loadingText } from "./fetchData.js";
import { $ } from "./getElement.js";
import { showItem } from "./showItem.js";
import { checkState } from "./states.js";

export function renderHTML(collection){
    const list = $('ul');
    for (let i = 0; i < collection.artObjects.length; i++) 
    {
      list.insertAdjacentHTML(
          "beforebegin",
          `<button class="art-piece">
              <img src="${collection.artObjects[i].webImage.url.slice(0, -3) + "=s1000"}" alt="${collection.artObjects[i].title}"/>
              <h2>${collection.artObjects[i].title}</h2>
          </button>`)
    }
    document.querySelectorAll('.art-piece').forEach((artPiece, index)=>{
        artPiece.addEventListener('click', ()=>{
            const id = collection.artObjects[index].objectNumber
            location.hash = "showArtPiece";
            showItem(id, artPiece)
        })
    })

    loadingText.textContent = "";
    checkState("#paintings")
}