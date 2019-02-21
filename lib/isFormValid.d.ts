import { FormField } from './formField';
import { Derive } from 'overmind';
export declare const isFormValid: Derive<boolean, {
    [field: string]: FormField;
}>;
