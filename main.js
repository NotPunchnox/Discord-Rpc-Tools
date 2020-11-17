const { app, BrowserWindow, Menu } = require('electron');


function createWindow() {
	let window = new BrowserWindow({
		titleBarStyle: "defaut",
		title: "selfbot",
		frame: false,
		width: 900,
    height: 500,
    show: true,
    resizable: true,
		webPreferences: {
      nodeIntegration: true, 
      enableRemoteModule: true
  }
	});

  window.loadFile("index.html");
  window.on('closed', () => {
    window = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})