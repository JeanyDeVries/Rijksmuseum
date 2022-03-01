import { $ } from "./getElement.js";
import { dataMuseum } from "./getItemData.js";
import { getDataID } from "./getItemData.js";

const list = $('div');

export function showItem(id, object){
    getDataID(id);
    console.log(dataMuseum)
    zoomIn(object);
}

function zoomIn(object){
   // list.insertAdjacentHTML(
     //  "beforebegin",
    //    `<button class="displayedItem">
    //    <h2>${dataMuseum.artObject.title}</h2>
    //    </button>`)
}