import { FormFieldProps } from '../../types';
import { FormLabel } from './FormLabel';

export function FormField({
    name,
    type,
    errorMessage,
    onChange,
    value,
}: FormFieldProps) {
    return (
        <div>
            <FormLabel name={name} errorMessage={errorMessage} />
            <input
                name={name}
                type={type}
                className='input-text'
                onChange={onChange}
                value={value}
            />
        </div>
    );
}
