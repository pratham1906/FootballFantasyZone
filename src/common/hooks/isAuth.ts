import { useMeAccountQuery } from '../generated/graphql';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface Options {
    redirect?: boolean;
}

const defaults: Options = {
    redirect: true,
};

export const useIsAuth = (options = defaults) => {
    const { loading, data } = useMeAccountQuery();
    const router = useRouter();

    useEffect(() => {
        if (options.redirect && !loading && !data?.me) {
            router.replace('/login?next=' + router.pathname);
        }
    }, [loading, data, router]);

    return data?.me;
};
