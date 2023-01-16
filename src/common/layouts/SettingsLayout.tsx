import { Sidebar } from './settingsLayout/index';
import { SETTINGS_PAGES } from '../../constants';
import { PropsWithChildren } from 'react';

export function SettingsLayout({ children }: PropsWithChildren<{}>) {
    return (
        <div className='flex space-x-6'>
            <Sidebar pages={SETTINGS_PAGES} />
            <div className='fg-item w-full pb-4'>{children}</div>
        </div>
    );
}
