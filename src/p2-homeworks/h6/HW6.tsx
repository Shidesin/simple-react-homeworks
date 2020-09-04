import React, {useState} from 'react';
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {restoreState, saveState} from './localStorage/localStorage';
import styles from './HW6.module.css'

function HW6() {
    const [value, setValue] = useState<string>('');

    const save = () => {
        saveState<string>('editable-span-value', value);
    };
    const restore = () => {
        setValue(restoreState<string>('editable-span-value', value));
    };

    return (
        <div className={styles.column}>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}

                <div className={styles.input_box}>
                    <SuperEditableSpan
                        value={value}
                        onChangeText={setValue}
                        spanProps={{children: value ? undefined : 'enter text...'}}
                    />
                </div>
                <span className={styles.button_box}>
                    <SuperButton onClick={save}>save</SuperButton>
                    <SuperButton onClick={restore}>restore</SuperButton>
                </span>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    );
}

export default HW6;
