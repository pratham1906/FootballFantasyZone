import 'jest';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitFor, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { PortraitButton } from '../PortraitButton';

describe('portrait button component', () => {
    test('renders successfully', () => {
        const onClickValue = jest.fn();
        expect(render(<PortraitButton src='/images/avatar-default.jpg' onClick={ onClickValue } />)).not.toBeNull();
    });
});