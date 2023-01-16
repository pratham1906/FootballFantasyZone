import { createContext } from 'react';

interface IAccountModalContext {
    accountModalVisible: boolean;
    setAccountModalVisible: (value: boolean) => void;
}

export const AccountModalContext = createContext<
    IAccountModalContext | undefined
>(undefined);
