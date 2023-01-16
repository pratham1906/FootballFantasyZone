import { MAIN_PAGES } from '../../../constants';
import { PageLink } from './navigationPageLinks/index';

interface Props {
    currentPage: string;
}

export function NavigationPageLinks({ currentPage }: Props) {
    return (
        <div className='sm:block sm:ml-6 hidden'>
            <div className='m-full flex items-center content-center h-full space-x-1 md:space-x-4'>
                {MAIN_PAGES.map(page => (
                    <PageLink
                        current={
                            currentPage.toLowerCase() === page.toLowerCase()
                        }
                        page={page}>
                        {page === 'Games' && (
                            <img
                                className='inline-block w-2 h-2 ml-2'
                                src='/icons/live.svg'
                            />
                        )}
                    </PageLink>
                ))}
            </div>
        </div>
    );
}
