
# Waddle Penguins Desktop

Client for Waddle Penguins (a CPPS) that makes playing the Flash game possible after January 12, 2021. This client does not connect to Waddle Penguins anymore, due to Waddle Penguins Classic's closure.
Thank you for playing. You can use this client for your own CPPS, as long as you add the same acknowledgements as here.


## Features

- Automatically clearing the users' cache when the application is launched (parties and features update instantly!),
- Discord Rich Presence support. Have a shiny Discord status when playing,
- Embedded (Pepper) Flash Player. There's no need to install Flash manually,
- Cross platform - works on Windows and macOS.


## User Installation

NOTE: This part was used for user installation when Waddle Penguins was still an open CPPS. If you're looking to develop a client for your own CPPS based on this source, please read "Development".

Visit https://waddlepenguins.tk/play/ and follow the instructions for your PC.

## Development

To create a client for your CPPS using this source you will need: Git, Node.js.

1. Clone the repository:

```bash
  git clone https://github.com/waddlepenguins/waddlepenguins_app
```

2. Install Node dependencies:

```bash
  npm install
```

3. Edit the files. You need to:
- Replace the URL of mainWindow.loadURL in main.js to your own play page or landing page,
- Replace the clientId and details of the Discord RPC in main.js. You will find helpful notes inside the file.
- Change "waddlepenguins" in name in files: package.json, package-lock.json and "Desktop client for waddlepenguins.tk" in description in package.json. You are required to leave "Created by AltoDev" intact.
- Change appId ("com.waddlepenguins.desktop") and product name ("Waddle Penguins Desktop") in package.json to your CPPS.

4. Test your client:

```bash
  npm start
```

5. If everything functions as you wish, build the client:

Windows: 
```bash
  npm run-script build
```
macOS:
```bash
  npm run-script build-mac
```

6. After the clients build, open the folder called `dist` and you will find a .exe installer for Windows and .pkg for macOS. You can share those for your users to download and install.
## Acknowledgements

Originally created by AltoDev.

Adopted by Waddle Penguins and adapted for waddlepenguins.tk.

Licensed under the Creative Commons Zero v1.0 Universal license.

If you wish to develop a client for your own CPPS using this code you are required to leave the acknowledgements here and inside the client unchanged.
## Updates & Support

This application is no longer maintained or updated by the publisher. Issues created might not be fixed, bug fixes will not be released. Please research the dependencies and update them if needed.

Application last updated: Feb 22, 2021