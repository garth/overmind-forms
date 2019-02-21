"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const effects = tslib_1.__importStar(require("./effects"));
exports.setField = ({ value: { field, value } }) => effects.setField(field, value);
exports.resetField = ({ value: { field, value } }) => effects.resetField(field, value);
//# sourceMappingURL=actions.js.map