import 'jest';
import { FieldError } from '../../generated/graphql';
import { toErrorMap } from '../toErrorMap';

describe('toErrorMap utility', () => {
    test('errors map correctly to object', () => {
        const fieldErrors: FieldError[] = [
            {
                __typename: 'FieldError',
                field: 'username',
                message: 'an error occurred'
            },
            {
                __typename: 'FieldError',
                field: 'password',
                message: 'an error occurred'
            }
        ];
        
        const result = toErrorMap(fieldErrors);
        expect(result).toStrictEqual({
            username: 'an error occurred',
            password: 'an error occurred'
        });
    });

    test('does not break if given empty array of field errors', () => {
        const fieldErrors: FieldError[] = [];

        const result = toErrorMap(fieldErrors);
        expect(result).toStrictEqual({});
    });
});