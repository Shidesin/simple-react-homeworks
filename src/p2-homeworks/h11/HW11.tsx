import React, {ChangeEvent, useState} from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';
import {Slider} from '@material-ui/core';

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(50);
    const [value, setValue] = useState([0,20]);


    const f1 = (newValue: number[]) => {
        setValue1(newValue[0])
        setValue2(newValue[1])
    }

    const handleChange = (event: ChangeEvent<{}>, newValue: number | number[]) => {
        setValue(newValue as number[])
        f1(newValue as number[])
    };

    return (
        <div>
            <hr/>
            homeworks 11

            <div>
                <span>{value1}</span>
                <SuperRange onChangeRange={setValue1}
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange/>
                <span>{value2}</span>
            </div>

            <hr/>

            <Slider value={value} onChange={handleChange} valueLabelDisplay={'auto'} />

        </div>
    );
}

export default HW11;
