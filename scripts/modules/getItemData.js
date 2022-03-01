export let dataMuseum = null;

export async function getDataID(id){
      var urlID = "https://www.rijksmuseum.nl/api/nl/collection/" + id + "?key=ixmhN4my&imgonly=true";
      try{
            const response = await fetch(urlID)
            const result = await response.json();
            dataMuseum = result;
      }catch(error){
            throw new Error(console.error());
      }
}