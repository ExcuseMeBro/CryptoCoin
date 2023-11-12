import 'vue-toastification/dist/index.css'

import Toast from 'vue-toastification'

import { CommonToast } from '#components'

const options = {
  position: 'top-right',
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: false,
  icon: false,
  rtl: false,
  maxToasts: 3,
  newestOnTop: true,
  component: CommonToast,
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, options)
})
