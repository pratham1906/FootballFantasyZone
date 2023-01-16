import { useIsAuth } from '../../common/hooks/isAuth';
import { useRouter } from 'next/router';

function Profile() {
    const user = useIsAuth();

    if (user) {
        const router = useRouter();
        router.replace('/profile/' + user.id);
    }

    return null;
}

export default Profile;
