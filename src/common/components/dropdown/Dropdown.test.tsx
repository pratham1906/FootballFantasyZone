import 'jest';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitFor, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { Dropdown } from '../Dropdown';

describe('dropdown component', () => {
    const options = ['Any', 'Option A', 'Option B', 'Option C'];
    const mockLiftSelectedOptionValue = jest.fn();

    test('loads component successfully', () => {
        render(<Dropdown options={ options } liftSelectedOption={ mockLiftSelectedOptionValue } />);
        expect(screen.getByTestId('dropdown')).not.toBeNull();
    });

    test('loads and displays options', async () => {
        const { getByTestId } = render(<Dropdown options={ options } liftSelectedOption={ mockLiftSelectedOptionValue }/>);
        expect(getByTestId('dropdown-p-selected').textContent).toBe('Any');
    });

    test('click and expand option list', async () => {
        const { getByTestId } = render(<Dropdown options={ options } liftSelectedOption={ mockLiftSelectedOptionValue } />);
        fireEvent.click(getByTestId('dropdown-div-menu'));
        expect(getByTestId('dropdown-ul-optionlist').childElementCount).toBe(options.length);
    });

    test('minimize option list by clicking selected', async () => {
        const { getByTestId } = render(<Dropdown options={ options } liftSelectedOption={ mockLiftSelectedOptionValue } />);
        fireEvent.click(getByTestId('dropdown-p-selected'));
        fireEvent.click(getByTestId('dropdown-p-selected'));

        await waitForElementToBeRemoved(() => getByTestId('dropdown-ul-optionlist'));
    });

    test('select new option and display', async () => {
        const optionToSelectIndex = 2;
        const optionNotToSelect = 0;

        const { getByTestId } = render(<Dropdown options={ options } liftSelectedOption={ mockLiftSelectedOptionValue } />);
        fireEvent.click(getByTestId('dropdown-div-menu'));
        fireEvent.click(getByTestId('dropdown-ul-optionlist').childNodes[optionToSelectIndex]);
        expect(getByTestId('dropdown-p-selected').textContent).toBe(options[optionToSelectIndex]);
        expect(getByTestId('dropdown-p-selected').textContent).not.toBe(options[optionNotToSelect]);
    });
});