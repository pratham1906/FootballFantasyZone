import { MainLayout } from '../../common/layouts';

function PageNotFound() {
    return (
        <MainLayout>
            <div className='flex  w-screen h-screen'>
                <div className='space-y-32 text-center justify-start'>
                    <div>
                        <h1 className='text-3xl font-bold'>Page not found</h1>
                        <p className='text-lg font-semibold'>
                            It appears the page you've requested does not exist.
                        </p>
                    </div>
                    <div className='w-1/2 mx-auto justify-self-center'>
                        <img src='/images/not-found.svg' alt='Not found' />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default PageNotFound;
