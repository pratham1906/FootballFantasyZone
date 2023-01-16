import { useGetClubQuery } from '../generated/graphql';
import { useRouter } from 'next/router';
import { useParseParam } from '../hooks';

export const useGetClubFromURL = () => {
    const router = useRouter();
    const shortName = useParseParam().toUpperCase();

    return useGetClubQuery({ variables: {
        shortName
    }});
}