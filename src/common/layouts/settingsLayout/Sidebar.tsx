import Link from 'next/link';
import { toHyphenatedCase } from '../../../common/utils';

interface Props {
    pages: string[];
}

export function Sidebar({ pages }: Props) {
    return (
        <aside className='flex flex-col fg-item w-1/4 py-2 space-y-2'>
            <div className='mb-4 px-4'>
                <h1 className='font-bold text-2xl py-2'>Settings</h1>
                <hr />
            </div>
            {pages.map(page => (
                <Link href={'/settings/' + toHyphenatedCase(page)}>
                    <span className='sidebar-option'>{page}</span>
                </Link>
            ))}
        </aside>
    );
}
