# Rijksmuseum

## Table of Contents  
[User Story](#UserStory)  
[API](#API)  
[Render Data](#Render)  
[Specific Item API](#SpecificItemAPI)  
[Modules](#Modules)  
[Issues](#Issues)

## UserStory <a name="UserStory">
As an art lover, I want to be able to search and view art from the Rijksmuseum at home, so that I can still enjoy art during a lockdown.

## API <a name="API">
To get the data from Rijksmuseum I used their API. To get the data from the API I used the fetch method, see code below. The specific url I needed to use was: "https://www.rijksmuseum.nl/api/nl/collection?key=ixmhN4my&ps=10&imgonly=true". I then got the data from the "then" in the fetch. 
  
```
fetch(url)
    .then(CheckError)
    .then(function(collection){
        renderHTML(collection);
    })
    .catch((error) => {
        console.log(error);
    });
```
  
## Render Data <a name="Render">
We now have the data from the fetch, but it is not displayed yet. To do that I looped through every art object. Then I made a li html with an image and a header 2 for the title. Because we loop through each item, we can get the correct image and title. 
  
(Feedback I got later: try to use a anchor instead of a li)
  
```
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
```

## Specific Item API <a name="SpecificItemAPI">
I got the data from the API mentioned before, but sadly to get more specific information about a item you need a different API. I needed to make another fetch with another link to make this work, see code below. In the fetch before, I said in the list item that with the onclick it shows the item and gives the ID, which is important. We need the ID to grab the correct url for the API. 
  
```
var urlID = "https://www.rijksmuseum.nl/api/nl/collection/" + id + "?key=ixmhN4my&imgonly=true";
fetch(urlID)
  .then(response => response.json())
  .then(data => {
    return data;
  });
}  
```
  
## Modules <a name="Modules">

  
## Issues <a name="Issues">
If you see any issues in my code or spots that need improvements let me know. You can file an issue in this repository. Thank you!
