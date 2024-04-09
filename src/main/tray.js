import { Tray, ipcMain, Menu, app, globalShortcut, clipboard } from 'electron'
import { getIcon } from './utils'
import { store } from '../store'
import { getCommandWindow, getSettingsWindow } from './windowManager'
import { getCorrection } from '../services/correctionService'

export let tray

const setupTray = () => {
  tray = new Tray(getIcon('idle'))
}

const handleUpdateTrayEvent = (event, promptList) => {
  updateTray(promptList)
}

export const createTray = () => {
  setupTray()
  ipcMain.on('update-tray', handleUpdateTrayEvent)
  updateTray()
}

const createMenuItem = ({ title, hotkeys, value }) => ({
  label: title,
  click: () => getCorrection(value),
  ...(hotkeys ? { accelerator: hotkeys } : {})
})

const createMenu = (menuItems) => {
  const contextMenu = Menu.buildFromTemplate([
    ...menuItems,
    { type: 'separator' },
    {
      label: 'Réglages',
      click: () => {
        getSettingsWindow().show()
      }
    },
    { label: 'Quitter', click: () => app.quit() }
  ])

  tray.setContextMenu(contextMenu)
}

export const updateTray = (promptList) => {
  const items = promptList || store?.get('promptList') || []
  const menuItems = items.map(createMenuItem)
  createMenu(menuItems)
  updateGlobalShortcut(items)
}

const updateGlobalShortcut = (promptList) => {
  globalShortcut.unregisterAll()

  const shortcutablePrompt = promptList.filter((p) => p.hotkeys)

  shortcutablePrompt.forEach((p) => {
    const ret = globalShortcut.register(p.hotkeys, () => getCorrection(p.value))
    if (!ret) {
      console.log('registration failed')
    }
  })

  globalShortcut.register('option+f', () => {
    getSettingsWindow().blur()
    getCommandWindow().show()
    getCommandWindow().on('ready-to-show', () => {
      getCommandWindow().webContents.send('update', {
        loading: false,
        initialText: clipboard.readText(),
        type: 'FREE'
      })
    })
  })
}
