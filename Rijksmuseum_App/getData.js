const api_url = "https://www.rijksmuseum.nl/api/nl/collection?key=ixmhN4my&ps=50'"

onload = getData(api_url);

function getData(url)
{
    const stateDisplay = $('section');
    stateDisplay.textContent = "Error while loading";
    
    fetch(url)
    .then(function(response) 
    {
        return response.json();
    })
    .then(function(collection){
        console.log(collection);
        stateDisplay.textContent = "";

        const list = $('ul');
        for (let i = 0; i < collection.artObjects.length; i++) {
            list.insertAdjacentHTML(
                "beforebegin",
                `<li>
                    <h2>${collection.artObjects[i].title}</h2>4
                    <p>${collection.artObjects[i].element}</p>
                    <img src="${collection.artObjects[i].webImage.url}" alt="${collection.artObjects[i].title}"/>
                </li>`)
            }
    })
    .catch(function(error) {
        console.log(error);
    })
}


function $(element) {
    return document.querySelector(element);
 };