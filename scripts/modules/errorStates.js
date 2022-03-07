import { checkState } from "./app.js";

export function CheckError(response) {
    if (response.status >= 400 && response <= 499) {
        //stateDisplay.textContent = "Something has gone wrong at your side. Try refreshing";
        console.log("client error");
        checkState("error");
      } 
    else if (response.status >= 500 && response.status <= 599) {
        //stateDisplay.textContent = "Something has gone wrong on our side. Sorry for the inconvenience";
        console.log("server error");
        checkState("error");
    } 
    else {
      throw Error(response.statusText);
    }
  }