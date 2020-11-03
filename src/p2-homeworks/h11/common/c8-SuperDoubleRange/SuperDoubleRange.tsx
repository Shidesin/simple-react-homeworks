import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import {Slider} from '@material-ui/core';


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: number[]) => void
    numberValue?: number[]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {onChangeRange, numberValue}
) => {


    return (
        <>
        <Slider value={numberValue} onChange={(event, value) => {
            if (onChangeRange) {
                onChangeRange(typeof value === 'number' ? [0, 0] : value)
            }
        }} valueLabelDisplay={'auto'} />
</>
)
    ;
}

export default SuperDoubleRange;
