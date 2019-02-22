"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formField_1 = require("./formField");
const isFormValid_1 = require("./isFormValid");
exports.form = (fields) => Object.keys(fields).reduce((form, fieldName) => {
    form[fieldName] = formField_1.formField(fields[fieldName].value, fields[fieldName].isValid);
    return form;
}, { isValid: isFormValid_1.isFormValid });
//# sourceMappingURL=form.js.map