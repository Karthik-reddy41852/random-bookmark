# Random X Bookmark Chrome Extension

![Extension Icon](optional_icon_url.png) <!-- Add a link to your extension icon here or a placeholder -->

A simple Chrome extension that displays a random bookmarked tweet from your X (formerly Twitter) account.

## Features

*   Displays a random tweet from your saved bookmarks.
*   Provides a link to view the original tweet on X.
*   Securely stores API credentials using Chrome Storage.
*   Easy to use and lightweight.
*   Options page to set X API credentials.

## How to Install

1.  Download or clone this repository.
2.  Open Chrome and go to `chrome://extensions`.
3.  Enable "Developer mode" in the top right corner.
4.  Click "Load unpacked" and select the directory of your project.

## How to Use

1.  After installing, right click on your extension's icon in the Chrome toolbar and select "Options".
2.  Enter your X API credentials (API Key, API Secret, Bearer Token) and click "Save Keys".
3.  Click on the extension icon.
4.  Click the "Get Random Tweet" button in the popup window.
5.  A random tweet from your X bookmarks will be displayed along with a link to view it on X.

## Setting up API Credentials
1. To use this extension, you will need to create a Twitter developer account (if you don't already have one) at [https://developer.twitter.com/](https://developer.twitter.com/).
2. Create a new application in the developer portal.
3. Obtain API Key, Secret Key, and a Bearer Token.
4. Open the extension's options page (right click on the extension icon and select "options").
5.  Enter the values for API Key, API Secret and Bearer Token and click "Save Keys".
6.  You are now able to use the extension.

## Technologies Used

*   HTML
*   CSS
*   JavaScript
*   Chrome Extension APIs (storage, runtime)
*   X (Twitter) API


## Known Issues
*   API Rate limiting: The extension might not work if the API rate limits are exceeded.
*   Authentication: This project uses only a Bearer Token for authentication, and no user context.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License
This project is licensed under the [License Name] - see the [LICENSE.md](LICENSE.md) file for details. <!-- Add your license here -->

## Author

karthikreddy9035@gmail.com
