export const setField = (field, value) => {
    field.value = value;
    field.isPristine = false;
};
export const resetField = (field, value = '') => {
    field.value = value;
    field.isPristine = true;
};
//# sourceMappingURL=effects.js.map