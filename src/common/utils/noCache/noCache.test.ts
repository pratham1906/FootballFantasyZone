import 'jest-extended'
import { noCache } from '../noCache';

describe('noCache utility', () => {
    test('updates the src url', () => {
        const src = 'https://images.com/image.png';
        const result = noCache(src);

        expect(result).not.toBe(src);
        expect(result).not.toEndWith(src);
        expect(result).toStartWith(src);
    });

    test('url should be unique', () => {
        const src = 'https://images.com/image.png';
        const result1 = noCache(src);
        const result2 = noCache(src);

        expect(result1).not.toEqual(result2);
    })
});