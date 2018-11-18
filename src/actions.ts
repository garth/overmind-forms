import { Action } from 'overmind'
import { FormField } from './formField'
import * as effects from './effects'

export const setField: Action<{ field: FormField; value: string }> = ({ value: { field, value } }) =>
  effects.setField(field, value)

export const resetField: Action<{ field: FormField; value?: string }> = ({ value: { field, value } }) =>
  effects.resetField(field, value)
