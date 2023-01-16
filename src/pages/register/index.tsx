import { RegisterForm } from '../../modules/register';
import { VerificationForm } from '../../modules/verification/VerificationForm';
import { useRouter } from 'next/router';
import { AuthLayout } from '../../common/layouts';
import { useIsAuth } from '../../common/hooks';
import { useState } from 'react';

function Register() {
    const router = useRouter();
    const isAuth = useIsAuth({ redirect: false });

    const [verifyingEmail, setVerifyingEmail] = useState<string | undefined>();

    if (isAuth) {
        router.replace('/');
        return null;
    }

    const handleOnSuccess = (email: string) => {
        setVerifyingEmail(email);
    };

    return (
        <AuthLayout>
            {verifyingEmail ? (
                <VerificationForm email={verifyingEmail} />
            ) : (
                <RegisterForm
                    switchToLogin={() => router.replace('/login')}
                    onSuccess={handleOnSuccess}
                />
            )}
        </AuthLayout>
    );
}

export default Register;
