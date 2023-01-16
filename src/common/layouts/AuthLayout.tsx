import { PropsWithChildren } from 'react';

export function AuthLayout({ children }: PropsWithChildren<{}>) {
    return (
        <div className='bg-black'>
            <div
                className='h-screen w-screen fixed bg-black'
                style={{
                    backgroundImage: `url("/images/background.jpg")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    filter: `blur(1.5rem)`,
                }}
            />
            <div className='h-screen w-screen relative flex justify-center items-center bg-fixed z-20'>
                <div className='bg-white rounded-md flex flex-col py-10 px-20 shadow-2xl'>
                    <div className='mx-auto flex space-x-4'>
                        <h1 className='text-2xl font-bold'>FPL Watch</h1>
                        <img
                            className='h-10 w-10 self-center'
                            src='/images/logo.png'
                            alt='logo'
                        />
                    </div>
                    <div className='my-auto'>{children}</div>
                </div>
            </div>
        </div>
    );
}
