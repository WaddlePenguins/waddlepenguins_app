const {app, BrowserWindow, dialog} = require('electron');
const isDev = require('electron-is-dev');
const { autoUpdater } = require("electron-updater");
const DiscordRPC = require('discord-rpc');

//const {app, BrowserWindow} = require('electron');
const path = require('path');

let pluginName
switch (process.platform) {
  case 'win32':
    pluginName = 'flash/pepflashplayer64_32_0_0_303.dll'
    break
  case 'darwin':
    pluginName = 'flash/PepperFlashPlayer.plugin'
    break
  case 'linux':
    pluginName = 'flash/libpepflashplayer.so'
    break
}
app.commandLine.appendSwitch('ppapi-flash-path', path.join(__dirname, pluginName));

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
autoUpdater.checkForUpdatesAndNotify();
let mainWindow;

function clearCache() {
  mainWindow.webContents.session.clearCache();
}

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    title: "Connecting...",
    icon: __dirname + '/favicon.ico',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      plugins: true
    }
  });

  mainWindow.setMenu(null);
  clearCache();
  mainWindow.loadURL('https://waddlepenguins.tk/launcher/'); // Replace https://waddlepenguins.tk/launcher/ with your play page (ex. play.your.cpps) or a landing page like a home page.

  // RICH PRESENCE START
  
  // Change 796476157415522354 with your own application ID. You can register an application at https://discord.com/developers/applications. Remember to change waddlepenguins.tk in details. Otherwise your Discord RPC will show it as the detail link.
  const clientId = '796476157415522354'; DiscordRPC.register(clientId); const rpc = new DiscordRPC.Client({ transport: 'ipc' }); const startTimestamp = new Date();
  rpc.on('ready', () => {
    rpc.setActivity({
      details: `waddlepenguins.tk`, 
      state: `Client - Made by AltoDev.`, 
      startTimestamp, 
      largeImageKey: `main-logo`//, 
      //largeImageText: "LARGE IMAGE TEXT", 
      //smallImageKey: "favicon_512", 
      //smallImageText: "SMALL IMAGE TEXT"
    });
  });
  rpc.login({ clientId }).catch(console.error);

  //mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow();
});


setInterval(clearCache, 1000*60*5);