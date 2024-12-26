// options.js

document.getElementById("optionsForm").addEventListener("submit", async (event) => {
    event.preventDefault();  // Prevent page from reloading

    console.log("Save Keys button clicked!");

    let api_key = document.getElementById("apiKey").value;
    let api_secret = document.getElementById("apiSecret").value;
    let bearer_token = document.getElementById("bearerToken").value;


    chrome.storage.local.set({apiKey: api_key, apiSecret:api_secret, bearerToken: bearer_token}, () => {
        console.log('Values are set');
    });
});

//Set Default values for testing:
chrome.storage.local.get(['apiKey', 'apiSecret', 'bearerToken'],(result)=>{
    if(!result.apiKey){
         console.log("Setting test values");
        chrome.storage.local.set({
              apiKey: "YOUR_API_KEY_HERE",
              apiSecret:"YOUR_API_SECRET_HERE",
              bearerToken: "YOUR_BEARER_TOKEN_HERE"
          },()=>{
              console.log("Test values are set");
        });
    }
});