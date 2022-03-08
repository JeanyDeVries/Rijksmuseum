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
### Clone this repo
```
  $ git clone https://github.com/AronPelgrim/web-app-from-scratch-2122.git
```

### Navigate to the repo
```
$ cd web-app-from-scratch-2122
```
  
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
 
### Render HTML
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
 
### Render specfic item
I also wanted to give the user the option to see the description and data of the art. Sadly this is only retrievable from a different url. This url needs the id from the art work. The id per art object is in the API we fetched before. So what I did was I made the html element with an id of art-piece. I then went through all the art pieces and gave them an on click function. I got the id then from the collection I got in the fetch and got the specific id using the index from the foreach. I then fetched the new data as before with the new url: "https://www.rijksmuseum.nl/api/nl/collection/" + id + "?key=ixmhN4my&imgonly=true"
 
Same as before, I rendered the html elements and gave it a pop-up effect. 
 
```
     document.querySelectorAll('.art-piece').forEach((artPiece, index)=>{
        artPiece.addEventListener('click', ()=>{
            const id = collection.artObjects[index].objectNumber
            location.hash = "showArtPiece";
            showItem(id, artPiece)
        })
    })
```

 
## Done + future plans <a name="checklist">
### Done
- [x] Getting the data
- [x] Rendering the data
- [x] Showing specific items
 -[x] Loading state
- [x] Internet error state
- [x] modules
- [x] States
 
### Future plans
- [ ] Load more paintings while scrolling
- [ ] A different styling
- [ ] Add more error states
- [ ] Search after some time automatically

## Issues <a name="Issues">
If you see any issues in my code or spots that need improvements let me know. You can file an issue in this repository. Thank you!
 

 
 
 
 

