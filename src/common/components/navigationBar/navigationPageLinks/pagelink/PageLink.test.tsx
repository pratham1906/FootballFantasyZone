import 'jest';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react';
import { PageLink } from '../PageLink';

describe('pagelink component', () => {
    test('component renders', () => {
        const { getByTestId } = render(<PageLink page='games' current={ false } />);
        expect(getByTestId('pagelink')).not.toBeNull();
    });

    test('non-current page does not get underlined', () => {
        const { queryByTestId } = render(<PageLink page='games' current={ false } />);
        expect(queryByTestId('pagelink-span-underline')).not.toBeInTheDocument();
    });

    test('current page gets underlined', () => {
        const  { queryByTestId } = render(<PageLink page='games' current />);
        expect(queryByTestId('pagelink-span-underline')).toBeInTheDocument();
    });

    test('displays correct text', () => {
        const { getByTestId } = render(<PageLink page='games' current={ false } />);
        expect(getByTestId('pagelink-p-text').textContent).toBe('games');
    });
});