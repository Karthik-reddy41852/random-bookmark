// background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getTweet") {
        getBookmarkedTweets().then(sendResponse);
        return true;
    }
});

const getBookmarkedTweets = async () => {
    try {
        // Retrieve stored credentials
        const credentials = await chrome.storage.local.get(['apiKey', 'apiSecret', 'bearerToken']);
        const apiKey = credentials.apiKey;
        const apiSecret = credentials.apiSecret;
        const bearerToken = credentials.bearerToken;

        if (!apiKey || !apiSecret || !bearerToken) {
            console.error('API credentials not set. Please configure the extension.');
             return {}; // Return empty object to indicate failure
        }

        const response = await fetch("https://api.twitter.com/2/users/me/bookmarks", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${bearerToken}`
            }
        });

       if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
       }

        const data = await response.json();
        console.log("API Response:", data);
        if (data.data && data.data.length > 0) {
            let randomIndex = Math.floor(Math.random() * data.data.length);
            let randomTweet = data.data[randomIndex];
            return {text:randomTweet.text, id:randomTweet.id};
        } else {
            return {};
        }
    } catch (error) {
        console.error("Error fetching bookmarks:", error);
        return {};
    }
}