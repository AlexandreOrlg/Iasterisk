import Store from 'electron-store'
import {ipcMain} from "electron";

Store.initRenderer()

export const store = new Store({
  encryptionKey: 'AfWkUYyqWi'
})

ipcMain.on('electron-store-get', async (event, val) => {
  event.returnValue = store.get(val)
})

ipcMain.on('electron-store-set', async (event, key, val) => {
  store.set(key, val)
})

