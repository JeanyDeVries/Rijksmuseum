# Rijksmuseum

![Screenshot_7](https://user-images.githubusercontent.com/44086608/157221688-72205b72-837e-4fc5-a1a5-94a00cd642af.png)


## Table of Contents  
[Description](#Description)  
[Install Project](#Install)  
[How to use](#HowToUse)  
[API](#API)  
[Done + future plans](#checklist)  
[Issues](#Issues)


## Description <a name="Description">
*As an art lover, I want to be able to search and view art from the Rijksmuseum at home, so that I can still enjoy art during a lockdown.*
 
This is the case for the project I have made. You can see some of the art pieces in the main page, but if those are not the ones you seek, you can always use the search bar to search through the library of Rijksmuseum. If you want to see more information about the art-piece you can just click it. 
  
## Install Project <a name="Install">
  - In je CLI plak deze code: git clone https://github.com/JeanyDeVries/Rijksmuseum.git
  - Cd naar de juiste project folder  
  
## How to use  <a name="HowToUse">
When you load the page you see multiple artworks displayed. You can see the title and the image from each artwork. But I wanted the user to see the date it has been made plus the description. So if you click an artwork, there will be more information displayed. If you want to go back you can just click outside the pop-up or on the cross on the right top. A nice feature that this project has is the search bar. If you want to look up a specific art piece or art pieces from an artist you can just put the name in the search bar and it will look throught the entire library for you. The results will be displayed if you type your search and press enter. For the results you can also click for more information. If you want to go back to the home page, delete the search bar value and you will be redirected back. 
 
### Activity Diagram 
To make it more clear how the app functions plus the code within, I made a activity diagrma. This visually shows how it is all put together. 

Click this link to see the flow chart: https://www.figma.com/file/PMzlEesSm2UuJHwQT0Onac/Untitled?node-id=0%3A1. 

## API <a name="API">
For this project I display artwork from the Rijksmuseum. I have not implemented all the data by myself. I used their public API for it. This API has all the information, images etc. for each artwork. But how does it work?
 
The first step to getting the data from the API is to get the correct url to fetch. In the site it shows that for the url you need a access token/id to make use of it. So I made my own account and got one. I then implemented my own key in the url:
 
The specific url I needed to use was: "https://www.rijksmuseum.nl/api/nl/collection?key=ixmhN4my&ps=10&imgonly=true". 
You can see that after the collection a key needs to be specified. That is the key I got from my account.
 
For the code I used a fetch with the correct url. In the .then I say that I want to get the collection, which is the data I got from the fetch. I then use the data to render my HTML. 

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
 
###Render HTML
We now have the data from the fetch, but it is not displayed yet. To do that I looped through every art object. I put in my own html element in the unordered list I got (.displayItems ul). I implemented a button with an image and a header 2. I gave the source and title the correct information from the data. I did this by getting the data and then going throught the artobjects array with the for loop and getting the specific title and source from that artobject. 
 
 
 ```
     const list = $('.displayItems ul');
     for (let i = 0; i < collection.artObjects.length; i++) 
     {
       list.insertAdjacentHTML(
           "beforebegin",
           `<button class="art-piece">
               <img src="${collection.artObjects[i].webImage.url.slice(0, -3) + "=s1000"}" alt="${collection.artObjects[i].title}"/>
               <h2>${collection.artObjects[i].title}</h2>
           </button>`)
     }
 ```
 
###Render specfic item

 
## Done + future plans <a name="checklist">

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
  
  
