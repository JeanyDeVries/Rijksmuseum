# Rijksmuseum

## Table of Contents  
[Description](#Description)  
[Install Project](#Install)  
[How to use](#HowToUse)  
[API](#API)  
[Issues](#Issues)


## Description <a name="Description">
*As an art lover, I want to be able to search and view art from the Rijksmuseum at home, so that I can still enjoy art during a lockdown.*
 
This is the case for the project I have made. You can see some of the art pieces in the main page, but if those are not the ones you seek, you can always use the search bar to search through the library of Rijksmuseum. If you want to see more information about the art-piece you can just click it. 
  
## Install Project <a name="Install">
  - In je CLI plak deze code: git clone https://github.com/JeanyDeVries/Rijksmuseum.git
  - Cd naar de juiste project folder  
  
## How to use  <a name="HowToUse">
 
 
### Activity Diagram 
To make it more clear how the app functions plus the code within, I made a activity diagrma. This visually shows how it is all put together. 

Click this link to see the flow chart: https://www.figma.com/file/PMzlEesSm2UuJHwQT0Onac/Untitled?node-id=0%3A1. 

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

 ## Issues <a name="Issues">
If you see any issues in my code or spots that need improvements let me know. You can file an issue in this repository. Thank you!
 
 
 
 
 
 
 
 
 
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
To refactor and tidy up our code, it was necessary to put some code in functions and modules. I already made a lot of seperate functions, but it was still in one script. It would be better to put every function in a different module to make it more readable. The good thing about making it in different functions, is to prevent duplicate code. For example I need to fetch data three times in my code. It would be better then to have a fetch function once and call it 3 different times, instead of making 3 different functions that lookalike. 

## States <a name="States">
I as a programmer used a lot of switch cases with different game states. This way it would be easy to follow where you are in the game. In this case a app. A state each has a different function. For example the loading state needs to display the loading text plus a fun animation to make it more clear it's loading. 
  
  
