export interface FormField {
    value: string;
    isPristine: boolean;
    isValid: boolean;
    showError: boolean;
}
export declare type IsValid = (value: string) => boolean;
export declare const formField: (value?: string, isValid?: boolean | IsValid) => FormField;
