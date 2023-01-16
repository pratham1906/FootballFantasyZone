import { useRouter } from 'next/router';
import { useIsAuth } from '../../common/hooks';

const SettingsRedirect = () => {
    const user = useIsAuth();

    if (user) {
        const router = useRouter();
        router.replace('/settings/profile-information');
    }

    return null;
};

export default SettingsRedirect;
