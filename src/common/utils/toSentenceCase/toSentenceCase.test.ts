import 'jest';
import { toSentenceCase } from '../toSentenceCase';

describe('toSentenceCase utility', () => {
    test('applies sentence case to camel case string', () => {
        const result = toSentenceCase('ThisShouldBeASentence');
        
        expect(result).toBe('This should be a sentence');
    });
});