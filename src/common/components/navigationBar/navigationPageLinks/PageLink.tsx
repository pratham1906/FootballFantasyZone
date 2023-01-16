import Link from 'next/link';

interface Props {
    page: string;
    current: boolean;
}

export function PageLink({
    page,
    current,
    children,
}: React.PropsWithChildren<Props>) {
    return (
        <div className='flex flex-col justify-center h-full' data-testid='pagelink'>
            <div className='py-2 m-auto'>
                <Link href={`/${page.toLowerCase()}`}>
                    <p
                        data-testid='pagelink-p-text'
                        className={
                            (current ? 'text-black ' : 'text-gray-600 ') +
                            'hover:bg-gray-50 hover:text-black font-semibold rounded-md text-sm px-3 py-2 m-auto flex items-center cursor-pointer select-none'
                        }>
                        {page}
                        {children}
                    </p>
                </Link>
            </div>
            <div className='h-0.5 w-10/12 flex place-self-center rounded-full'>
                { current && <span className='w-full h-full bg-blue-700' data-testid='pagelink-span-underline'></span>}
            </div>
        </div>
    );
}
