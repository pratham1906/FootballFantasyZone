import { MainLayout } from '../../common/layouts';
import { useGetClubFromURL } from '../../common/utils/getClubFromUrl';
import { ClubHead, Overview } from '../../modules/club';

function ClubContent() {
    const { data, error, loading } = useGetClubFromURL();

    if (!data?.club || loading) {
        return null;
    }

    const socialMedia = {
        facebook: data.club.socialMedia.facebook as string | undefined,
        twitter: data.club.socialMedia.twitter as string | undefined,
        instagram: data.club.socialMedia.instagram as string | undefined,
        youtube: data.club.socialMedia.youtube as string | undefined,
        tiktok: data.club.socialMedia.tiktok as string | undefined
    }; 

    return (
        <MainLayout>
            <div className='flex flex-col space-y-4'>
                <ClubHead name={ data.club.name } crestLocation={ data.club.crestLocation } socialMedia={ socialMedia }/>
                <div className=''>
                    <nav className='w-full'>
                        <ul className='flex'>
                            <li className='px-4 py-1 fg-item rounded-b-none cursor-pointer border-b-0 -mb-0.5 mt-1'>Overview</li>
                            <li className='px-4 py-1 cursor-pointer fg-item bg-gray-100 rounded-b-none border-b-0 mt-1'>Fixtures</li>
                            <li className='px-4 py-1 cursor-pointer fg-item bg-gray-100 rounded-b-none border-b-0 mt-1'>Stats</li>
                        </ul>
                    </nav>
                    <Overview />
                </div>
            </div>
        </MainLayout>
    );
}

export default ClubContent;