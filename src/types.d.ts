import { Form } from 'formik';

// Form Components
type FormikFieldValueSetter = (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
) => void;

export type AbstractFormComponentProps = {
    name: string;
    errorMessage?: string;
    onChange?: (event: any) => void;
    value?: string;
};

export type FormDropdownProps = AbstractFormComponentProps & {
    options: Array<string>;
    setFieldValue: FormikFieldValueSetter;
};

export type FormTextAreaProps = AbstractFormComponentProps & {
    placeholder?: string;
    setFieldValue: FormikFieldValueSetter;
};

export type FormFieldProps = AbstractFormComponentProps & {
    type: 'text' | 'password';
};

// Login Register Form
export type LoginFormValues = {
    email: string;
    password: string;
};

export type RegisterFormValues = LoginFormValues & { username: string };

// Filters
export type AcceptedFilterTypes = string | number | number[];

// Form Status
interface IStatusWithContent {
    type: 'formError';
    message: string;
}

interface IFormStatus {
    type: 'normal' | 'success' | 'fieldError';
}

export type FormStatus = IFormStatus | IStatusWithContent;
