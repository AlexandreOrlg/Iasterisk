import { get, writable } from 'svelte/store'
import dataService from './services/dataService'

function createAppStore() {
  const initialState = getInitialState()
  const store = writable(initialState)
  const { subscribe, update } = store

  function getInitialState() {
    return {
      apiKey: dataService.get('apiKey') || null,
      promptList: dataService.get('promptList') || [],
      history: dataService.get('history') || []
    }
  }

  function persistPromptList() {
    const storePromptListValue = get(store).promptList
    dataService.set('promptList', storePromptListValue)
    dataService.send('update-tray', storePromptListValue)
  }

  function setApiKey(apiKey) {
    window.store.set('apiKey', apiKey)
    update((s) => ({ ...s, apiKey }))
  }

  function addPrompt(prompt) {
    update((s) => ({ ...s, promptList: [...s.promptList, prompt] }))
    persistPromptList()
  }

  function removePrompt(prompt) {
    update((s) => ({ ...s, promptList: s.promptList.filter((p) => p.id !== prompt.id) }))
    persistPromptList()
  }

  function editPrompt(prompt, editedPrompt) {
    update((s) => ({
      ...s,
      promptList: s.promptList.map((p) => (p.id === prompt.id ? editedPrompt : p))
    }))
    persistPromptList()
  }

  return {
    subscribe,
    update,
    setApiKey,
    addPrompt,
    removePrompt,
    editPrompt
  }
}

export const appStore = createAppStore()
