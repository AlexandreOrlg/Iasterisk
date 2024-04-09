import electron, {globalShortcut, BrowserWindow, shell } from 'electron'
import { join } from 'path'
import { is } from '@electron-toolkit/utils'

let windowsStore: BrowserWindow[] = []



function createWindow( windowId, config): BrowserWindow {

  let mainWindow = new BrowserWindow({
    webPreferences: {
      preload: join(__dirname, `../preload/${windowId}.js`),
      sandbox: false
    },
    ...config
  })


  mainWindow.on('closed', () => {
    windowsStore[windowId] = null; // Réinitialise la référence à la fenêtre lorsque celle-ci est fermée
  });

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(`${process.env['ELECTRON_RENDERER_URL']}/${windowId}/${windowId}.html`)
  } else {
    mainWindow.loadFile(join(__dirname, `../renderer/${windowId}/${windowId}.html`))
  }

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  return mainWindow
}

function getWindow(windowId, callback) : BrowserWindow {
  if (!windowsStore[windowId]) windowsStore[windowId] = callback()
  return windowsStore[windowId]
}

function createSettingsWindow(): BrowserWindow {

  let mainWindow = createWindow('settings', {
    width: 900,
    height: 670,
    show: false,
    title: 'Aisterisk',
    autoHideMenuBar: true
  } )

  return mainWindow
}

export function getSettingsWindow() {
  return getWindow('settings', createSettingsWindow)
}

function createCommandWindow(): BrowserWindow {
  let mainWindow = createWindow('command', {
    width: 600,
    height: 400,
    show: false,
    frame: false,
    alwaysOnTop: true,
    autoHideMenuBar: true,
    devTools: true,
  } )

  mainWindow.on('blur', () => {
   // mainWindow.close();
  });


  return mainWindow
}

export function getCommandWindow() {
  return getWindow('command', createCommandWindow)
}
