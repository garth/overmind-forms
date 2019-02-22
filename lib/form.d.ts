import { IsValid, FormField } from './formField';
import { isFormValid } from './isFormValid';
interface FormDefinition {
    [fieldName: string]: {
        value?: string;
        isValid?: boolean | IsValid;
    };
}
declare type FormFields<T extends FormDefinition> = {
    [F in keyof T]: FormField;
};
declare type Form<T extends FormDefinition> = {
    isValid: typeof isFormValid;
} & FormFields<T>;
export declare const form: <T extends FormDefinition>(fields: T) => Form<T>;
export {};
