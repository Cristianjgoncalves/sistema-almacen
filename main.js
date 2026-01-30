const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    title: "El Almacén del Repostero",
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Esta línea es la que corregimos para que encuentre el archivo sí o sí
  win.loadFile(path.join(__dirname, 'index.html'));

  // OPCIONAL: Descomentá la línea de abajo si querés ver qué error tira (consola)
  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
