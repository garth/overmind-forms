"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formField = (value = '', isValid = true) => {
    const showError = field => !field.isPristine && !field.isValid;
    return {
        value,
        isPristine: true,
        isValid: typeof isValid === 'function' ? (field => isValid(field.value)) : isValid,
        showError: showError
    };
};
//# sourceMappingURL=formField.js.map