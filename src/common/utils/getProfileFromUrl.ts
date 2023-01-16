import { useGetProfileQuery } from '../generated/graphql';
import { useParseId } from './parseId';

export const useGetProfileFromURL = () => {
    const id = useParseId();

    return useGetProfileQuery({
        skip: id === -1,
        variables: {
            id,
        },
    });
};
