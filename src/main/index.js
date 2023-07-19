import { app, BrowserWindow, globalShortcut, session } from 'electron'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { createWindow } from './mainWindow'
import { createTray } from './tray'
import { setUpOpenAi } from './aiCorrection'


console.log(process.env);
app.whenReady().then(() => {

  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()
  createTray()
  setUpOpenAi()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})
