// @ts-nocheck
import { FormField, formField } from './formField'
import { Derive } from 'overmind'

export const isFormValid: Derive<boolean, { [field: string]: FormField }> = form => {
  console.log("isFormValid.ts:form", form)
  let valid = true
  Object.keys(form).find(fieldName => {
    // fieldName => fieldName !== 'isValid' && typeof form[fieldName] === 'object' && !form[fieldName].isValid
    if (fieldName !== 'isValid' && form.hasOwnProperty(fieldName) && form[fieldName].hasOwnProperty('isValid') /* && !form[fieldName].isValid.isValid*/ ) {
      valid = form[fieldName].isValid.isValid
      console.dir(`isFormValid triggered: ${fieldName} is ${valid}\n\tform[fieldName].isValid: ${form[fieldName].isValid}`)
      if (!valid) return true // stop looking when find a {isValid: false}
    }
  }
  )

  console.log("isFormValid.ts:form:valid", valid)
  return valid
}



// -------------------------------------------------
// node_modules/overmind-forms/es/isFormValid.js
//
// fixes broken `Object.keys(form).find(...)` logic
//   function-state-tree or proxied object fields kept causing recursive stack overflows;
//   I don't think this approach is very "overmindish"....
// ---
//
// let count = 0;  // recursion overflow guard
//
// export const isFormValid = (form) => {
//   if (count > 500) return false       // recursion overflow guard
//   let valid = true;
//
//   // TODO refactor into function; run also on 'isPristene'
//   // valid = valid && !form[fieldName].isPristine  // form not valid before user input
//   Object.keys(form).find(fieldName => {  /* tricky use of Array.find() - it stops after first 'true' return */
//     if (fieldName !== 'isValid' && form.hasOwnProperty(fieldName) && form[fieldName].hasOwnProperty('isValid') && !form[fieldName].isValid.isValid){
//       valid = form[fieldName].isValid.isValid
//       console.dir(count, ` hit! ${fieldName} is ${valid}`)
//       return true
//     }
//   })
//
//   // console.dir("isFormValid.ts:form ", count, valid)
//
//   count++
//   return !!valid  // boolean typecast
//
// }
//
// --------------------------------


// const mock2 = {
//   "loginForm": {
//     "isValid": true,
//     "email": {
//       "value": "aa",
//       "isPristine": false,
//       "isValid": {
//         "isValid": false,
//         "failedRule": {
//           "name": "minLength",
//           "arg": 3
//         },
//         "errorMessage": null
//       },
//       "showError": false
//     }
//   }
// }

// isFormValid(mock2, {}) //?
// isFormValid(mockForm, {}) //?
/*

*/
