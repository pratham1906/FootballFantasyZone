import { useRef, useState, useEffect } from 'react';

export const useOutsideAlerter = (initialValue: boolean) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(initialValue);

    const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {};
    }, [ref]);

    return { visible, setVisible, ref };
};

export const useOutsideAlerterWithContext = (
    value: boolean,
    setValue: (value: boolean) => void
) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setValue(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {};
    }, [ref]);

    return { ref };
};
