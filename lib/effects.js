"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setField = (field, value) => {
    field.value = value;
    field.isPristine = false;
};
exports.resetField = (field, value = '') => {
    field.value = value;
    field.isPristine = true;
};
//# sourceMappingURL=effects.js.map