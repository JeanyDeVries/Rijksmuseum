const api_url = "https://www.rijksmuseum.nl/api/nl/collection?key=ixmhN4my&ps=50'"
const stateDisplay = $('section');

onload = getData(api_url);

function getData(url)
{
    stateDisplay.textContent = "Loading";
    
    fetch(url)
        .then(CheckError)
        .then(function(collection){
            console.log(collection);
            stateDisplay.textContent = "";

            const list = $('ul');
            for (let i = 0; i < collection.artObjects.length; i++) {
              list.insertAdjacentHTML(
                  "beforebegin",
                  `<li onclick = "showItem()">
                      <img src="${collection.artObjects[i].webImage.url.slice(0, -3) + "=s1000"}" alt="${collection.artObjects[i].title}"/>
                      <h2>${collection.artObjects[i].title}</h2>
                  </li>`)
              }
        })
        .catch((error) => {

        });
}

function showItem(){
  console.log("item clicked");
}

function $(element) {
    return document.querySelector(element);
 };

 function CheckError(response) {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } 
    else if (response.status >= 400 && response.status <= 499) {
        stateDisplay.textContent = "Something has gone wrong at your side. Try refreshing";
        console.log("client error");
      } 
    else if (response.status >= 500 && response.status <= 599) {
        stateDisplay.textContent = "Something has gone wrong on our side. Sorry for the inconvenience";
        console.log("server error");
    } 
    else {
      throw Error(response.statusText);
    }
  }