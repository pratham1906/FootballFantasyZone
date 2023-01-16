interface Props {
    home: string,
    away: string,
    date: string,
    time: string
} // temporary. eventually just query a fixture

export function LargeFixture() {
    return (
        <div className='rounded-md w-1/2 m-auto'>
            <div className='flex cursor-pointer hover:text-blue-700'>
                <p className='ml-auto'>Expand</p>
                <img src='/icons/arrow-right.svg' />
            </div>
            <div className='flex justify-between mt-2'>
                <div className='flex items-center'>
                    <p className='font-bold'>CHE</p>
                    <img className='w-32' src={'https://resources.premierleague.com/premierleague/badges/t54.png'} />
                </div>
                <div>
                    <p className='font-semibold text-center mt-8'>Saturday, May 1</p>
                    <p className='text-2xl font-bold text-center'>12:30</p>
                </div>
                <div className='flex items-center'>
                    <img className='w-32'src={'https://resources.premierleague.com/premierleague/badges/t54.png'} />
                    <p className='font-bold'>FUL</p>
                </div>
            </div>
        </div>
    )
}