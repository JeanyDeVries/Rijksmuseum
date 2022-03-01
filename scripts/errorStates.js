import { stateDisplay } from "./fetchData.js";

export function CheckError(response) {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } 
    else if (response.status >= 400 && response.status <= 499) {
        stateDisplay.textContent = "Something has gone wrong at your side. Try refreshing";
        console.log("client error");
        return response.json();
      } 
    else if (response.status >= 500 && response.status <= 599) {
        stateDisplay.textContent = "Something has gone wrong on our side. Sorry for the inconvenience";
        console.log("server error");
        return response.json();
    } 
    else {
      throw Error(response.statusText);
    }
  }