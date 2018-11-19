import { FormField } from './formField'
import { Derive } from 'overmind'

export const isFormValid: Derive<boolean, { [field: string]: FormField }> = form =>
  !Object.keys(form).find(
    fieldName => fieldName !== 'isValid' && typeof form[fieldName] === 'object' && !form[fieldName].isValid
  )
