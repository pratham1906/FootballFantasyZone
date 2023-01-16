import { FormLabel } from './FormLabel';
import { Dropdown } from './Dropdown';
import { FormDropdownProps } from '../../types';

export function FormDropdown({
    name,
    errorMessage,
    options,
    value,
    setFieldValue,
}: FormDropdownProps) {
    return (
        <div>
            <FormLabel name={name} errorMessage={errorMessage} />
            <Dropdown
                options={options}
                value={value}
                liftSelectedOption={(selectedOption: string) => {
                    setFieldValue(name, selectedOption);
                }}
            />
        </div>
    );
}
