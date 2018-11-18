import { Derive } from 'overmind'
import { FormField } from './formField'

export const isValid: Derive<boolean, { [field: string]: FormField }> = form =>
  !Object.keys(form).find(
    fieldName => fieldName !== 'isValid' && typeof form[fieldName] === 'object' && !form[fieldName].isValid
  )
