import { formField } from './formField';
import { isFormValid } from './isFormValid';
export const form = (fields) => Object.keys(fields).reduce((form, fieldName) => {
    form[fieldName] = formField(fields[fieldName].value, fields[fieldName].isValid);
    return form;
}, { isValid: isFormValid });
//# sourceMappingURL=form.js.map