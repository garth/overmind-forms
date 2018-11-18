import { FormField } from './formField'

export const setField = (field: FormField, value: string) => {
  field.value = value
  field.isPristine = false
}

export const resetField = (field: FormField, value = '') => {
  field.value = value
  field.isPristine = true
}
