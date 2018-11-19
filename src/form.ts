import { IsValid, formField, FormField } from './formField'
import { isFormValid } from './isFormValid'

interface FormDefinition {
  [fieldName: string]: {
    value?: string
    isValid?: boolean | IsValid
  }
}
type FormFields<T extends FormDefinition> = { [F in keyof T]: FormField }
type Form<T extends FormDefinition> = { isValid: typeof isFormValid } & FormFields<T>

export const form = <T extends FormDefinition>(fields: T): Form<T> =>
  Object.keys(fields).reduce(
    (form, fieldName) => {
      form[fieldName] = formField(fields[fieldName].value, fields[fieldName].isValid)
      return form
    },
    { isValid: isFormValid }
  ) as any
