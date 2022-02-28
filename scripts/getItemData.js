export function getDataID(id){
    var urlID = "https://www.rijksmuseum.nl/api/nl/collection/" + id + "?key=ixmhN4my&imgonly=true";
    fetch(urlID)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        return data;
      });
}