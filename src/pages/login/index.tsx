import { LoginForm } from '../../modules/login';
import { useRouter } from 'next/router';
import { AuthLayout } from '../../common/layouts';
import { useIsAuth } from '../../common/hooks';

function Login() {
    const router = useRouter();
    const isAuth = useIsAuth({ redirect: false });

    if (isAuth) {
        router.replace('/');
        return null;
    }

    const handleOnSuccess = () => {
        router.reload();
    };

    return (
        <AuthLayout>
            <LoginForm
                switchToRegister={() => router.replace('/register')}
                onSuccess={handleOnSuccess}
            />
        </AuthLayout>
    );
}

export default Login;
