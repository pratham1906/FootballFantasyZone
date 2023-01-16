import 'jest-extended';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { MobileMenuButton } from '../MobileMenuButton';

describe('MobileMenuButton component', () => {
    test('renders successfully', () => {
        const onClickMock = jest.fn();
        expect(render(<MobileMenuButton mobileSidebarVisible={ false } onClick={ onClickMock } />)).not.toBeNull();
    });

    test('icon changes depending on sidebar visiblity', () => {
        const onClickMock = jest.fn();

        const { rerender, getByTestId } = render(<MobileMenuButton mobileSidebarVisible={ false } onClick={ onClickMock } />);
        expect(getByTestId('mobilemenubutton-img-menu')).not.toHaveClass('hidden')
        expect(getByTestId('mobilemenubutton-img-close')).toHaveClass('hidden');

        rerender(<MobileMenuButton mobileSidebarVisible onClick={ onClickMock } />);
        expect(getByTestId('mobilemenubutton-img-menu')).toHaveClass('hidden')
        expect(getByTestId('mobilemenubutton-img-close')).not.toHaveClass('hidden');
    });

});