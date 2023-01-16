import { useState } from 'react';
import { useRouter } from 'next/router';
import {
    Logo,
    NavigationPageLinks,
    NavigationSearchBar,
    MobileMenuButton,
    MobileSidebar,
    NavigationDropdown,
} from './navigationBar/index';

export function NavigationBar() {
    const [mobileSidebarVisible, setMobileSidebarVisible] = useState(false);
    const router = useRouter();
    const currentPage = router.pathname.substring(1);
    const handleMobileMenuButtonClick = () =>
        setMobileSidebarVisible(!mobileSidebarVisible);

    return (
        <>
            <nav className='bg-white shadow-sm'>
                <div className='max-w-7x1 sm:px-6 lg:px-8 px-2 mx-auto'>
                    <div className='relative flex items-center justify-between h-16'>
                        <div className='sm:hidden absolute inset-y-0 left-0 flex items-center'>
                            <MobileMenuButton
                                onClick={handleMobileMenuButtonClick}
                                mobileSidebarVisible={mobileSidebarVisible}
                            />
                        </div>

                        <div className='sm:items-stretch sm:justify-start flex items-center justify-center flex-1 h-full'>
                            <Logo />
                            <NavigationPageLinks currentPage={currentPage} />
                        </div>
                        <NavigationSearchBar />
                        <NavigationDropdown />
                    </div>
                </div>
            </nav>
            <MobileSidebar
                currentPage={currentPage}
                visible={mobileSidebarVisible}
            />
        </>
    );
}
