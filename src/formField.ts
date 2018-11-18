import { Derive } from 'overmind'

export interface FormField {
  value: string
  isPristine: boolean
  isValid: boolean
  showError: boolean
}

export type IsValid = (value: string) => boolean

export const formField = (value = '', isValid: boolean | IsValid = true): FormField => {
  const showError: Derive<boolean, FormField> = field => !field.isPristine && !field.isValid

  return {
    value,
    isPristine: true,
    isValid: typeof isValid === 'function' ? ((field => isValid(field.value)) as any) : isValid,
    showError: showError as any
  }
}
