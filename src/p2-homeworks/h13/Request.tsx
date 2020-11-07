import React, {useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {checkBoxRequest} from './requestReducer';


export function Request() {
    const [checked, setChecked] = useState<boolean>(false);

    let message = useSelector<AppStoreType, string>(state => state.request)

    const dispatch = useDispatch()

    const sendRequest = (checked: boolean) => {
        dispatch(checkBoxRequest(checked))
    }


    return (
        <div>
            <div>{message}</div>
            <div>
                <SuperButton onClick={() => sendRequest(checked)}>Send request</SuperButton>
            </div>
            <div>
                <SuperCheckbox checked={checked} onChangeChecked={setChecked}/>
            </div>
        </div>
    )
}