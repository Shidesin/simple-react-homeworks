import React, { DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from '../c7-SuperRange/SuperRange.module.css';



type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC< SuperDoubleRangePropsType> = (
    {onChangeRange, value, onChange, className, ...restProps}
) => {



    const finalRangeClassName = `${s.range} ${className ? className : ""}`;
    return (
        <>
            /
        </>
    );
}

export default SuperDoubleRange;
