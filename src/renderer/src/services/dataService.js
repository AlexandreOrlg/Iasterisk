const dataService = {
  get: function (key) {
    return window.store.get(key)
  },

  set: function (key, value) {
    window.store.set(key, value)
  },

  send: function (channel, ...args) {
    window.electron.ipcRenderer.send(channel, ...args)
  }
}

export default dataService
