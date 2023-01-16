import { useOutsideAlerter } from '../../hooks/outsideAlerter';
import { AVATAR_DEFAULT } from '../../../constants';
import {
    MeDocument,
    useLogoutMutation,
    useMeQuery,
} from '../../generated/graphql';
import { SigninButton, PortraitButton } from './navigationDropdown/index';
import { Transition } from '@headlessui/react';
import Link from 'next/link';

export function NavigationDropdown() {
    const { visible, setVisible, ref } = useOutsideAlerter(false);

    const { loading: fetchingAccount, data: accountData } = useMeQuery();
    const [logout] = useLogoutMutation({
        update: cache => {
            cache.reset();
            cache.readQuery({ query: MeDocument });
        },
    });

    const handlePortraitButtonClick = () => setVisible(!visible);

    let accountStateRender: JSX.Element | undefined | null;

    if (fetchingAccount) {
        // greyed out icon
    } else if (!accountData?.me) {
        accountStateRender = <SigninButton />;
    } else {
        accountStateRender = (
            <>
                <p className='sm:flex hidden mr-2 text-sm font-semibold'>
                    {accountData.me.name || accountData.me.username}
                </p>
                <PortraitButton
                    src={accountData.me?.avatarLocation || AVATAR_DEFAULT}
                    onClick={handlePortraitButtonClick}
                    sr='open profile menu'
                />
            </>
        );
    }

    return (
        <>
            {accountStateRender}
            <Transition
                show={visible}
                enter={'ease-out duration-100'}
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'>
                <div
                    ref={ref}
                    className='ring-1 ring-black ring-opacity-5 absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg'
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='user-menu'>
                    <Link href='/profile'>
                        <p
                            role='menuItem'
                            className='hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700 cursor-pointer'>
                            Profile
                        </p>
                    </Link>
                    <Link href='/settings'>
                        <p
                            className='hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700 cursor-pointer'
                            role='menuItem'>
                            Settings
                        </p>
                    </Link>
                    <p
                        onClick={() => {
                            logout();
                        }}
                        className='hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700 cursor-pointer'
                        role='menuItem'>
                        Sign Out
                    </p>
                </div>
            </Transition>
        </>
    );
}
