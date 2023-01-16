import Link from 'next/link';
import { useGetClubQuery } from '../../common/generated/graphql';

interface Props {
    data: {
        favouriteTeam?: string | null;
    };
}

export function Favourites({ data: { favouriteTeam } }: Props) {
    const { data: clubData } = favouriteTeam ? 
        useGetClubQuery({ variables: { shortName: favouriteTeam } }) 
        : { data: undefined };

    const crestLocation = (clubData && clubData.club) ? clubData.club.crestLocation : '/images/none.jpg';
    const clubName = (clubData && clubData.club) ? clubData.club.name : 'None';

    return (
        <div className='fg-item flex px-10 py-5 justify-between'>
            <div className='flex flex-col justify-start items-center space-y-2'>
                <p className='font-bold text-lg'>Favourite Team</p>
                <Link href={`/club/${ favouriteTeam?.toLowerCase() }`}>
                    <div className='cursor-pointer'>
                        <img className='justify-self-center w-20' src={ crestLocation } alt='emblem' />
                        <p className='text-center'>{ clubName }</p>
                    </div>
                </Link>
            </div>

            <div className='flex flex-col'>
                <p className='font-bold text-lg'>Favourite Players</p>
                <img
                    className='justify-self-center'
                    src={ '' }
                    alt='collection of players'
                />
            </div>
        </div>
    );
}
