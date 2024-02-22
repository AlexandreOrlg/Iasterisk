import { addMessages, getLocaleFromNavigator, init, locale } from 'svelte-i18n'

import en from './locale/en.json'
import fr from './locale/fr.json'
import dataService from './services/dataService'

addMessages('us', en)
addMessages('fr', fr)

init({
  fallbackLocale: 'us',
  initialLocale: dataService.get('locale') || 'us'
})

locale.subscribe((localeString) => dataService.set('locale', localeString))
