import dayjs from 'dayjs'
import ru from 'dayjs/locale/ru'
import uz from 'dayjs/locale/uz-latn'
import relativeTime from 'dayjs/plugin/relativeTime.js'
// import updateLocale from 'dayjs/plugin/updateLocale.js'

export default defineNuxtPlugin((nuxtApp) => {
  dayjs.extend(relativeTime)
  // dayjs.extend(updateLocale)
  // dayjs.updateLocale('en', {
  //   months: [
  //     'Jan',
  //     'Feb',
  //     'March',
  //     'Apr',
  //     'May',
  //     'Jun',
  //     'Jul',
  //     'Aug',
  //     'Sept',
  //     'Oct',
  //     'Nov',
  //     'Dec',
  //   ],
  // })
  dayjs.locale(ru)
  dayjs.locale(uz)
  nuxtApp.provide('dayjs', dayjs)
})
