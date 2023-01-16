import { useEffect, useState } from 'react';
import Slider from '@material-ui/core/Slider';
import { styled } from '@material-ui/styles';

interface Props {
    name?: string;
    min: number;
    max: number;
    liftRangeUp: (value: number[], name?: string) => void;
}

const StyledSlider = styled(Slider)({
    color: '#1D4ED8',
});

export function RangeSlider({ min, max, name, liftRangeUp }: Props) {
    const [value, setValue] = useState<number[]>([min, max]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    useEffect(() => {
        if (name) {
            liftRangeUp(value, name);
        }
    }, [value]);

    return (
        <div className='w-60 h-8 mx-2'>
            <StyledSlider
                value={value}
                onChange={handleChange}
                valueLabelDisplay='auto'
                max={max}
                min={min}></StyledSlider>
        </div>
    );
}
