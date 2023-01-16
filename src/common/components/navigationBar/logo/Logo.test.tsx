import { render } from '@testing-library/react';
import 'jest';
import { Logo } from '../Logo';

describe('Logo component', () => {
    test('renders successfully', () => {
        expect(render(<Logo />)).not.toBeNull();
    });
})