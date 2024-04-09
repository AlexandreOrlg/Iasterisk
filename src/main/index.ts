import { app, globalShortcut } from 'electron'
import { createTray } from './tray'

app.on('ready', () => {
  createTray()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})
