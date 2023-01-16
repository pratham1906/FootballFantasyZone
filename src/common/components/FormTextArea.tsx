import { useEffect, useState } from 'react';
import { FormTextAreaProps } from '../../types';
import { FormLabel } from './FormLabel';

export function FormTextArea({
    name,
    errorMessage,
    placeholder,
    setFieldValue,
    value,
}: FormTextAreaProps) {
    const [text, setText] = useState(value);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    useEffect(() => {
        setFieldValue(name, text);
    }, [text]);

    return (
        <div>
            <FormLabel name={name} errorMessage={errorMessage} />
            <textarea
                className='fg-item px-2 py-1 w-full h-36'
                placeholder='Maximum of 500 words'
                value={text}
                onChange={handleChange}
            />
        </div>
    );
}
