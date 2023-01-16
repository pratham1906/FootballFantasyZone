import 'jest-extended';
import { MobileSidebar } from '../MobileSidebar';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

const MAIN_PAGES = ['Page A', 'Page B', 'Page C'];

jest.mock('../../../../constants', () => ({ MAIN_PAGES }));

describe('MobileSidebar component', () => {
    test('renders successfully', () => {
        expect(render(<MobileSidebar currentPage='home' visible />)).not.toBeNull();
    });
    
    test('sidebar is hidden when visiblity toggled off', () => {
        const { rerender, getByTestId } = render(<MobileSidebar currentPage='home' visible={ false } />);
        expect(getByTestId('mobilesidebar').childElementCount).toBe(0);

        rerender(<MobileSidebar currentPage='home' visible />);
        expect(getByTestId('mobilesidebar').childElementCount).not.toBe(0);
    });

    test('lists correct links', () => {
        const { getAllByTestId } = render(<MobileSidebar currentPage='home' visible />);
        
        getAllByTestId('mobilesidebar-a-link').forEach((link) => {
            expect(link.textContent).toBeOneOf(MAIN_PAGES);
        });
    });
});