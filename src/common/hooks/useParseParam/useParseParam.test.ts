import 'jest';
import { useParseParam } from '../useParseParam';

// Seems like a useless hook. May change or adapt to different query variables instead of just id 
jest.mock('next/router', () => ({
    useRouter: jest.fn().mockImplementation(() => ({
        query: {
            id: 'test'
        },
        beforePopState: jest.requireActual('next/router'),
    }))
}));

describe('useParseParam utility', () => {
    test('parses valid query parameter', () => {
        const result = useParseParam();
        expect(result).toBe('test');
    });
});