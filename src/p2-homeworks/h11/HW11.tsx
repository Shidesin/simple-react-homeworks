import React, {useState} from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';

function HW11() {
    const [value1, setValue1] = useState<number>(0);
    const [value2, setValue2] = useState<number>(50);


    const f1 = (newValue: number[]) => {
        setValue1(newValue[0])
        setValue2(newValue[1])
    }

    const superValue= [value1, value2]

    return (
        <div>
            <hr/>
            homeworks 11

            <div>
                <span>{value1}</span>
                <SuperRange value={value1} onChangeRange={setValue1}
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange onChangeRange={f1}  numberValue={superValue}/>
                <span>{value2}</span>
            </div>

            <hr/>

        </div>
    );
}

export default HW11;
