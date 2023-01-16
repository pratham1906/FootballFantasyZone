import { useRouter } from 'next/router';

export const useParseParam = () => {
    const router = useRouter();
    const id =
        typeof router.query.id === 'string' ? router.query.id : '';

    return id;
};