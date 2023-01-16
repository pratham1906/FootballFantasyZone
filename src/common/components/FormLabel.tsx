import { toSentenceCase } from '../utils';
import { AbstractFormComponentProps } from '../../types';

export function FormLabel({
    name,
    errorMessage,
}: Pick<AbstractFormComponentProps, 'name' | 'errorMessage'>) {
    const labelText = toSentenceCase(name);

    return (
        <div
            className={
                'flex content-end justify-between' +
                (errorMessage !== undefined && ' ring-red-600')
            }>
            <label htmlFor={name} className='label'>
                {labelText}
            </label>
            <p className='text-xs text-red-600'>{errorMessage}</p>
        </div>
    );
}
