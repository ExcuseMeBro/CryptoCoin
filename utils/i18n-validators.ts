import * as validators from '@vuelidate/validators'
import { useI18n } from 'vue-i18n'
export const useTranslate = () => {
  const { createI18nMessage } = validators

  // Create your i18n message instance. Used for vue-i18n@9
  const withI18nMessage = createI18nMessage({
    t: useI18n().t,
    messagePath: ({ $validator }) => `messages.${$validator}`,
  })

  const required = withI18nMessage(validators.required, {
    messagePath: () => 'validations.required',
  })

  const requiredIf = withI18nMessage(validators.requiredIf, {
    withArguments: true,
    messagePath: () => 'validations.required',
  })

  const minLength = withI18nMessage(validators.minLength, {
    withArguments: true,
    messagePath: () => 'validations.min_length',
  })

  const maxLength = withI18nMessage(validators.maxLength, {
    withArguments: true,
    messagePath: () => 'validations.max_length',
  })

  const validatePhoneNumber = (value: string) => {
    const regex =
      /^\+998([- ])?(90|91|93|94|95|98|99|33|97|71|77|78|70|20)([- ])?(\d{3})([- ])?(\d{2})([- ])?(\d{2})$/

    return regex.test(value)
  }

  const validPhoneNumber = withI18nMessage(validatePhoneNumber, {
    messagePath: () => 'validations.phone_number',
  })

  const email = withI18nMessage(validators.email, {
    messagePath: () => 'validations.email',
  })

  const isNumber = withI18nMessage(validators.numeric, {
    messagePath: () => 'validations.numeric',
  })

  return {
    required,
    requiredIf,
    minLength,
    maxLength,
    validPhoneNumber,
    email,
    isNumber,
  }
}
