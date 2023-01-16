import { useState, useContext } from 'react';
import { LoginForm } from '../../modules/login';
import { RegisterForm } from '../../modules/register';
import { AccountModalContext } from '../contexts/accountModalContext';
import { useOutsideAlerterWithContext } from '../hooks/outsideAlerter';
import { LoginFormValues, RegisterFormValues } from '../../types';
import { useRouter } from 'next/router';

type FormValues = LoginFormValues & RegisterFormValues;

enum Mode {
    Login,
    Register,
    Verification,
}

const titleText = new Map<Mode, string>([
    [Mode.Login, 'Login'],
    [Mode.Register, 'Register'],
    [Mode.Verification, 'Verify your email'],
]);

export function AuthenticationModal() {
    const {
        accountModalVisible: visible,
        setAccountModalVisible: setVisible,
    } = useContext(AccountModalContext)!;
    const { ref: modalRef } = useOutsideAlerterWithContext(visible, setVisible);
    const [mode, setMode] = useState(Mode.Login);
    const [savedValues, setSavedValues] = useState<FormValues>({
        email: '',
        username: '',
        password: '',
    });
    const router = useRouter();

    const handleModeChange = (values: Partial<FormValues>) => {
        if (mode === Mode.Verification) {
            return;
        }

        setSavedValues({ ...savedValues, ...values });
        setMode(mode === Mode.Login ? Mode.Register : Mode.Login);
    };

    const handleLoginSuccess = () => {
        setVisible(false);
        router.reload();
    };

    const handleRegisterSuccess = (email: string) => {
        // replace all below simply with verification form.
        setVisible(false);
        router.reload();
    };

    return (
        <div className='justify-items-center fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center w-screen h-screen overflow-y-auto bg-black bg-opacity-50'>
            <div
                ref={modalRef}
                className='fg-item sm:w-96 relative w-3/4 px-10 py-4 m-auto text-center select-none'>
                <h1 className='mb-28 mt-2 text-2xl font-bold'>
                    {titleText.get(mode)}
                </h1>
                {mode === Mode.Login ? (
                    <LoginForm
                        switchToRegister={handleModeChange}
                        savedValues={savedValues}
                        onSuccess={handleLoginSuccess}
                    />
                ) : (
                    <RegisterForm
                        switchToLogin={handleModeChange}
                        savedValues={savedValues}
                        onSuccess={handleRegisterSuccess}
                    />
                )}
                <hr className='my-4' />
            </div>
        </div>
    );
}
