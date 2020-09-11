const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");

let mainWindow;

function createWindow() {
   mainWindow = new BrowserWindow({
      title: "Exactt",
      fullscreen: true,
      show: false,
      icon: __dirname + "/Icon/AppIcon.icns",
   });
   const startURL = isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`;

   mainWindow.loadURL(startURL);

   mainWindow.once("ready-to-show", () => mainWindow.show());
   mainWindow.on("closed", () => {
      mainWindow = null;
   });
}
app.on("ready", createWindow);
