interface Props {
    data: {
        bio?: string | null;
    };
}

export function Biography({ data: { bio } }: Props) {
    return (
        <div className='fg-item px-10 py-5'>
            <header className='font-bold text-lg'>Biography</header>
            <p className=''>{bio}</p>
        </div>
    );
}
