import React, {useState} from 'react';
import SuperSelect from './common/c5-SuperSelect/SuperSelect';
import SuperRadio from './common/c6-SuperRadio/SuperRadio';
import s from './HW7.module.css'


const arr: string[] = ['x', 'y', 'z'];


function HW7() {
    const [value, onChangeOption] = useState(arr[1]);

    return (
        <div className={s.column}>
            <>homeworks 7</>


            {/*should work (должно работать)*/}
            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <div>
                    <SuperRadio
                        name={'My_radio'}
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>
            </div>


        </div>
    );
}

export default HW7;
