const api_url = "https://www.rijksmuseum.nl/api/nl/collection?key=ixmhN4my&ps=10&imgonly=true"

const stateDisplay = $('section');

onload = getDataCollection(api_url);

function getDataCollection(url)
{
    stateDisplay.textContent = "Loading";
    
    fetch(url)
        .then(CheckError)
        .then(function(collection){
            stateDisplay.textContent = "";

            const list = $('ul');
            for (let i = 0; i < collection.artObjects.length; i++) 
            {
              var id = collection.artObjects[i].objectNumber;
              list.insertAdjacentHTML(
                  "beforebegin",
                  `<li onclick = showItem("${id}")>
                      <img src="${collection.artObjects[i].webImage.url.slice(0, -3) + "=s1000"}" alt="${collection.artObjects[i].title}"/>
                      <h2>${collection.artObjects[i].title}</h2>
                  </li>`)
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function showItem(id){
    zoomIn();
    var dataItem = getDataID(id);
}

function zoomIn(){

}

function searchData(){
  console.log("search")
}

function getDataID(id){
    var urlID = "https://www.rijksmuseum.nl/api/nl/collection/" + id + "?key=ixmhN4my&imgonly=true";
    fetch(urlID)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        return data;
      });
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