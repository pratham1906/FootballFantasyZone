import 'jest';
import { SigninButton } from '../SigninButton';
import { render, fireEvent } from '@testing-library/react';
import { AccountModalContext } from '../../../../contexts';

describe('SigninButton component', () => {
    test('renders successfully', () => {
        const wrapper = 
            <AccountModalContext.Provider
                value={{ accountModalVisible: true, setAccountModalVisible: jest.fn() }}
            >
                <SigninButton />
            </AccountModalContext.Provider>;

        expect(render(wrapper)).not.toBeNull();
    });

    test('toggles account modal visiblity context on when currently false', () => {
        let accountModalVisible = false;

        const setAccountModalVisible = (value: boolean) => {
            accountModalVisible = value;
        }

        const wrapper = <AccountModalContext.Provider
            value={{ accountModalVisible, setAccountModalVisible: setAccountModalVisible }}
        >
            <SigninButton />
        </AccountModalContext.Provider>;

        const { getByTestId } = render(wrapper);
        const signinButton = getByTestId('signinbutton');

        expect(accountModalVisible).toBe(false);
        fireEvent.click(signinButton);
        expect(accountModalVisible).toBe(true);
    });
});