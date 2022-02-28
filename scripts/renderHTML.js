import { stateDisplay } from "./fetchData.js";
import { $ } from "./getElement.js";
import { showItem } from "./showItem.js";

export function renderHTML(collection){
    stateDisplay.textContent = "";

    const list = $('ul');
    for (let i = 0; i < collection.artObjects.length; i++) 
    {
      var id = collection.artObjects[i].objectNumber;
      list.insertAdjacentHTML(
          "beforebegin",
          `<li onclick = ${showItem(id)}>
              <img src="${collection.artObjects[i].webImage.url.slice(0, -3) + "=s1000"}" alt="${collection.artObjects[i].title}"/>
              <h2>${collection.artObjects[i].title}</h2>
          </li>`)
    }
}