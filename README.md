# overmind-forms

A basic forms implementation based on the concepts from cerebral-forms.

## Install

```
yarn add overmind-forms
```

or

```
npm install overmind-forms
```

## Setup

Configure your overmind app for use with overmind-forms, the commented lines to your `app.ts`

```ts
// app.ts
import { Overmind, TApp } from 'overmind'
import { namespaced } from 'overmind/es/config'
import { TConnect, createConnect } from 'overmind-react'

import * as login from './modules/login'
import * as form from 'overmind-forms' // add this line

const config = namespaced({
  login,
  form // and this one too
})

declare module 'overmind' {
  interface IApp extends TApp<typeof config> {}
}

export const app = new Overmind(config)
export type Connect = TConnect<typeof app>
export const connect = createConnect(app)
```

## Example Module

The following example shows creating a form in login module

```ts
// modules/login/state.ts
import formField from 'overmind-forms/formField'
import isValid from 'overmind-forms/isValid'
import { isEmail } from 'validator'

export let loginForm = {
  email: formField('', isEmail),
  password: formField('', value => value.length > 1),
  isValid
}
```

## Example Component

```tsx
// components/Login/index.tsx
import React from 'react'
import { connect, Connect } from '../../app'

const Login: React.StatelessComponent<Connect> = ({ app }) => (
  <form
    onSubmit={e => {
      e.preventDefault()
      app.actions.login.formSubmitted()
    }}>
    <input
      className={app.login.email.showError ? 'error' : ''}
      value={app.login.email.value}
      onChange={e =>
        app.form.setField({
          field: app.login.email,
          value: e.target.value
        })
      }
    />
    <input
      className={app.login.password.showError ? 'error' : ''}
      value={app.login.password.value}
      type="password"
      onChange={e =>
        app.actions.form.setField({
          field: app.login.password,
          value: e.target.value
        })
      }
    />
    <button type="submit" disabled={app.login.loginForm.isValid}>
      Submit
    </button>
  </form>
)
```
