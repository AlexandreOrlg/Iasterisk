import { electronAPI } from '@electron-toolkit/preload'

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electron', electronAPI)

contextBridge.exposeInMainWorld('store', {
  get(key) {
    return ipcRenderer.sendSync('electron-store-get', key)
  },
  set(property, val) {
    ipcRenderer.send('electron-store-set', property, val)
  },
  onUpdateHistory: (callback) =>
    ipcRenderer.on('update-history', (_event, value) => callback(value))
})
