import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import VueTheMask from 'vue-the-mask'
import VueMoney from 'v-money'
import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";

import type { App } from 'vue'

export function registerPlugins (app: App) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(VueTheMask as any)
    .use(Toast)
    .use(VueMoney, { precision: 2 })
}
