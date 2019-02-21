import { Action } from 'overmind';
import { FormField } from './formField';
export declare const setField: Action<{
    field: FormField;
    value: string;
}>;
export declare const resetField: Action<{
    field: FormField;
    value?: string;
}>;
