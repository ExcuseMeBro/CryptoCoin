const timeouts: Record<string, any> = {}
const cTimeout = (key = 'key') => {
  if (timeouts[key]) {
    clearTimeout(timeouts[key])
    timeouts[key] = undefined
  }
}

export const debounce = (key = 'key', fn = () => {}, timeout = 500) => {
  const sTimeout = (key: string, fn: any, timeout: number) => {
    cTimeout(key)
    timeouts[key] = setTimeout(() => {
      try {
        fn()
      } catch (e) {}
      timeouts[key] = undefined
    }, timeout)
  }
  return sTimeout(key, fn, timeout)
}

const validPhones = [
  '90',
  '91',
  '33',
  '50',
  '93',
  '94',
  '88',
  '95',
  '97',
  '98',
  '99',
  '77',
  '20',
]

export const isValidPhone = (val: string) => {
  const phone = val.replace(/[\s)(-]/g, '')
  return phone.length === 9 && validPhones.includes(phone.substring(0, 2))
}

export function formatNumberSpace(number: number, fix = 0) {
  return Intl.NumberFormat('uz-UZ', {
    minimumFractionDigits: fix,
  })
    .format(number)
    .replace(/,/g, ' ')
}

export function formatZero(number: number) {
  return number < 10 ? `0${number}` : number
}

export const share = (network: string, title: string) => {
  if (process.client) {
    switch (network) {
      case 'telegram':
        window.open(
          `https://t.me/share/url?url=${window.location.href}&text=${title}`,
          '_blank'
        )
        break
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?text=${title}\n+${window.location.href}`,
          '_blank'
        )
        break
      case 'facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?t=${title}\n${window.location.href}`,
          '_blank'
        )
        break
    }
  }
}

export function formatPhoneNumber(number: string) {
  const format = number
    ?.replace(/\D/g, '')
    .match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/)
  return `+${format && format[1] ? format[1] : ''}
          ${format && format[2] ? format[2] : ''}
          ${format && format[3] ? format[3] : ''}
          ${format && format[4] ? format[4] : ''}
          ${format && format[5] ? format[5] : ''}`
}

export function convertToEmbed(url: string) {
  // Match the video ID from the URL using a regular expression
  const regex =
    /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:youtu\.be\/|(?:youtube(?:-nocookie)?\.com\/(?:.*(?:\/|v=))|(?:youtube.googleapis.com\/v\/)))([^&?\s]{11})/i
  let match
  if (url?.length) {
    match = url.match(regex)
  }
  // @ts-ignore
  if (match?.length) {
    return match[1]
  }
}

export const changeJsonToFormData = (data: any) => {
  const form_data = new FormData()

  for (const key in data) {
    form_data.append(key, data[key])
  }

  return form_data
}

export const errorHandler = (error: {
  _data: {
    error: {
      field: string
      message: string
    }
  }[]
}) => {
  if (error?._data?.length) {
    return error?._data[0]?.error?.message
  } else {
    return null
  }
}

export const downloadFile = (file: string, filename: string) => {
  const link = document.createElement('a')
  link.href = file
  link.setAttribute('download', filename)
  link.setAttribute('target', '_blank')
  link.click()
  link.remove()
}

export const richTextPurify = (str: string, count = 120) => {
  const text = str?.replace(/<\/?[^>]+(>|$)|&[^\s]*;/gi, '')
  if (count === 0) {
    return text
  }
  return text?.substring(0, count)
}
