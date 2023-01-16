import { Transition } from '@headlessui/react';
import { MAIN_PAGES } from '../../../constants';

interface Props {
    currentPage: string;
    visible: boolean;
}

export function MobileSidebar({ currentPage, visible }: Props) {
    return (
        <aside className=' fixed w-3/5 h-screen overflow-hidden pointer-events-none' data-testid='mobilesidebar'>
            <Transition
                show={visible}
                enter='transition ease-in duration-150'
                enterFrom='transform -translate-x-full'
                enterTo='transform translate-x-0'
                leave='transition ease-out duration-150'
                leaveFrom='transform translate-x-0'
                leaveTo='transform -translate-x-full'>
                <div className='sm:hidden flex flex-col flex-none h-screen px-8 bg-gray-700 shadow-lg'>
                    <h1 className='pt-12 text-xl font-bold text-white'>
                        Fantasy Football Hub
                    </h1>
                    {MAIN_PAGES.map(page => (
                        <>
                            <a
                                href='#'
                                data-testid='mobilesidebar-a-link'
                                className={
                                    (page === currentPage
                                        ? 'text-blue-300'
                                        : 'text-white ') +
                                    ' pt-12 font-semibold text-lg'
                                }>
                                {page}
                            </a>
                            <hr className='opacity-10 -2/3 shadow-lg' />
                        </>
                    ))}
                </div>
            </Transition>
        </aside>
    );
}
