document.getElementById("getTweet").addEventListener("click", async () => {
    let tweetContainer = document.getElementById("tweet-container")
    tweetContainer.innerHTML = "<p>Loading...</p>"
    chrome.runtime.sendMessage({action:"getTweet"}, (response)=>{
       if(response && response.text){
            tweetContainer.innerHTML = "<p id='tweet-text'>" + response.text + "</p>"
            document.getElementById("tweet-link").href = `https://twitter.com/anyuser/status/${response.id}`;
        }
        else{
            tweetContainer.innerHTML = "<p>Unable to load tweet</p>"
        }
    });

});