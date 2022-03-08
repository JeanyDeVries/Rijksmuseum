import { checkState } from "./app.js";
import { $ } from "./getElement.js";
import { showItem } from "./showItem.js";

//If you want to change the search query use a & instead of a ?
export function renderSearchItems(collection){
    checkState("search")

    console.log(collection)

    if(collection.artObjects.length === 0){
        checkState("noSearchResults")
        return;
    }

    const list = $('.displaySearchResults');
    for (let i = 0; i < collection.artObjects.length; i++) 
    {
      list.insertAdjacentHTML(
          "beforebegin",
          `<button class="result-piece">
              <img src="${collection.artObjects[i].webImage.url.slice(0, -3) + "=s1000"}" alt="${collection.artObjects[i].title}"/>
              <h2>${collection.artObjects[i].title}</h2>
          </button>`)
    }
    document.querySelectorAll('.result-piece').forEach((artPiece, index)=>{
        artPiece.addEventListener('click', ()=>{
            const id = collection.artObjects[index].objectNumber;
            showItem(id, artPiece)
        })
    })
}