import { electronAPI } from '@electron-toolkit/preload'

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electron', electronAPI)

contextBridge.exposeInMainWorld('update', (callback) =>
    ipcRenderer.on('update', (_event, value) => callback(value))
)
