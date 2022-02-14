const api_url = "https://www.rijksmuseum.nl/api/nl/collection?key=ixmhN4my&ps=50'"

onload = getData(api_url);

function getData(url)
{
    
    fetch(url)
    .then(function(response) 
    {
        return response.json();
    })
    .then(function(collection){
        console.log(collection);

        const list = $('ul');
        for (let i = 0; i < collection.artObjects.length; i++) {
            list.insertAdjacentHTML(
                "beforebegin",
                `<li><h2>${collection.artObjects[i].longTitle}</h2><img src="${collection.artObjects[i].webImage.url}" alt="${collection.artObjects[i].title}"/></li>`)
        }
    })
    .catch(function(error) {
        console.log(error);
    })
}


function $(element) {
    return document.querySelector(element);
 };