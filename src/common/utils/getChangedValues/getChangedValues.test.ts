import 'jest';
import { getChangedValues } from '../getChangedValues';

describe('getChangedValues utility', () => {
    const oldValues = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
    };

    test('prunes unchanged values with all values as input', () => {
        const newValues = {
            firstName: 'John',
            lastName: 'Doe',
            age: 35
        };

        const result = getChangedValues(newValues, oldValues);
        expect(result).toEqual({
            age: 35
        });
    });

    test('prunes unchanged values with some values as input', () => {
        const newValues = {
            firstName: 'John',
            age: 35
        };

        const result = getChangedValues(newValues, oldValues);
        expect(result).toEqual({
            age: 35
        });
    });

    test('prunes unchanged values when all changed', () => {
        const newValues = {
            firstName: 'Doug',
            lastName: 'Dimmadome',
            age: 65
        };

        const result = getChangedValues(newValues, oldValues);
        expect(result).toEqual(newValues);
    });

    test('prunes nothing when values have not been changed', () => {
        const newValues = { ...oldValues };
        const result = getChangedValues(newValues, oldValues);
        expect(result).toEqual(newValues);
    });
});