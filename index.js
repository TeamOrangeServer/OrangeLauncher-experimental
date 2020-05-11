const electron = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow = null

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit()
  }
})

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    useContentSize: true
  })
  //TODO: `file://${__dirname}/index.html`
  mainWindow.loadURL(null)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
})
