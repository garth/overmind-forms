import * as effects from './effects';
export const setField = ({ value: { field, value } }) => effects.setField(field, value);
export const resetField = ({ value: { field, value } }) => effects.resetField(field, value);
//# sourceMappingURL=actions.js.map