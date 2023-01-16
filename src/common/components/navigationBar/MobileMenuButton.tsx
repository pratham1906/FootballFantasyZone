import Image from 'next/image';

type Props = {
    onClick: () => void;
    mobileSidebarVisible: boolean;
};
export function MobileMenuButton({ onClick, mobileSidebarVisible }: Props) {
    return (
        <button
            className='focus:outline-none focus:ring-inset inline-flex items-center justify-center p-2 rounded-md'
            aria-aria-expanded='false'>
            <span className='sr-only'>Open main menu</span>
            <img
                data-testid='mobilemenubutton-img-menu'
                src='/icons/menu.svg'
                onClick={onClick}
                className={
                    mobileSidebarVisible ? 'hidden' : 'block' + ' h-6 w-6'
                }
            />
            <img
                data-testid='mobilemenubutton-img-close'
                src='/icons/close.svg'
                onClick={onClick}
                className={
                    mobileSidebarVisible ? 'block' : 'hidden' + ' h-6 w-6'
                }
            />
        </button>
    );
}
