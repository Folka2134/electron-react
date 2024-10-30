import { app, BrowserWindow } from "electron";
import path from "path";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    // Window configuration
  });
  // Load index.html
  mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
});
