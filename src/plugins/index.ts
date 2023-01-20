import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import VueTheMask from 'vue-the-mask'
import VueMoney from 'v-money'

import type { App } from 'vue'

export function registerPlugins (app: App) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(VueTheMask)
    .use(VueMoney, { precision: 2 })
}
