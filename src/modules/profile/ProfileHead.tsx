import { noCache } from '../../common/utils';
import Link from 'next/link';

interface Props {
    data: {
        avatarLocation?: string | null;
        username?: string | null;
        name?: string | null;
        followers?: number | null;
        following?: number | null;
    };
    isUser: boolean;
}

export function ProfileHead({
    data: { username, name, avatarLocation },
    isUser,
}: Props) {
    const buttonRender = isUser ? (
        <Link href='/settings/profile-information'>
            {/* Normal Button */}
            <div>
                <span className='button bg-gray-400 hover:bg-gray-500 text-white w-32 hidden md:inline-block text-center'>
                    Edit Profile
                </span>

                {/* Mobile Button */}
                <div className='w-6 h-6 bg-white inline-block md:hidden'>
                    <img className='w-full h-full' src='/icons/pencil.svg' />
                </div>
            </div>
        </Link>
    ) : (
        <span className='button px-4 bg-red-400 text-white ml-8 text-center'>
            Follow
        </span>
    );

    return (
        <div className='flex fg-item p-10'>
            <img
                className='w-16 h-16 lg:w-32 lg:h-32 flex-none rounded-full'  // rounded-full
                src={
                    avatarLocation
                        ? noCache(avatarLocation)
                        : '/images/avatar-default.jpg'
                }
                alt='Avatar'
            />
            <div className='ml-8'>
                <header className='font-bold text-2xl'>{username}</header>
                <p className='font-medium text-gray-700'>{name}</p>
            </div>
            <div className='flex w-full items-start justify-end'>
                <div className='flex space-x-10 items-center'>
                    <div className='flex flex-col space-x-8 items-end lg:space-y-0 lg:space-x-4 lg:flex-row'>
                        <p className='font-medium'>
                            Following{' '}
                            <span className='font-normal text-gray-700'>10</span>
                        </p>
                        <p className='font-medium'>
                            Followers{' '}
                            <span className='font-normal text-gray-700'>4</span>
                        </p>
                    </div>
                    {buttonRender}
                </div>
            </div>
        </div>
    );
}
