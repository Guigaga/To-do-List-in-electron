const { app, BrowserWindow, Menu } = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 450,
    webPreferences: {
      nodeIntegration: true
    }
  });
  Menu.setApplicationMenu(null);
  mainWindow.loadFile('inbox.html');
});
