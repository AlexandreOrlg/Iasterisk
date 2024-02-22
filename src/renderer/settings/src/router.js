import SvelteRouter from '@danielsharkov/svelte-router'
import Prompts from './views/Prompts.svelte'
import Settings from './views/Settings.svelte'
import History from './views/History.svelte'

export default new SvelteRouter({
  window: window,
  scrollingElement: window.document.scrollingElement,
  basePath: '/',
  routes: {
    prompts: {
      path: '/',
      component: Prompts
    },
    settings: {
      path: '/settings',
      component: Settings
    },
    history: {
      path: '/history',
      component: History
    }
  }
})
