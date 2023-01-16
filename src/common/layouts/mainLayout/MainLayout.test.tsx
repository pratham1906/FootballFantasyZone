import 'jest';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitFor, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MainLayout } from '../MainLayout';
import { MockedProvider } from '@apollo/client/testing';

jest.mock('next/router', () => ({
    useRouter: jest.fn().mockImplementation(() => ({
        pathname: '/stats',
        beforePopState: jest.requireActual('next/router'),
    }))
}));

describe('MainLayout component', () => {
    test('renders successfully', () => {
        const { getByTestId } = render(
            <MockedProvider>
                <MainLayout />
            </MockedProvider>
        );

        expect(getByTestId('mainlayout')).not.toBeNull();
    });

    test('renders successfully with children', () => {
        const { getByTestId } = render(
            <MockedProvider>
                <MainLayout>
                    <div>
                        <h1>Testing MainLayout</h1>
                        <p>Hello, World!</p>
                    </div>
                </MainLayout>
            </MockedProvider>
        );

        expect(getByTestId('mainlayout')).not.toBeNull();
    });
});