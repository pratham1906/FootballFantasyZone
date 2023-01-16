import 'jest';
import { toHyphenatedCase } from '../toHyphenatedCase';

describe('toHyphenatedCase utility', () => {
    test('applies hyphenated case to a sentence', () => {
        const result = toHyphenatedCase('This is hyphenated');
        expect(result).toBe('this-is-hyphenated');
    });

    test('hyphens should not be found without spaces', () => {
        const result = toHyphenatedCase('ThisIsntHyphenated');
        expect(result).not.toContain('-');
    });
});