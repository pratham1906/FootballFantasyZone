import 'jest-extended';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { NavigationSearchBar } from '../NavigationSearchBar';

describe('NavigationSearchBar component', () => {
    test('renders successfully', () => {
        expect(render(<NavigationSearchBar />)).not.toBeNull();
    });
});
