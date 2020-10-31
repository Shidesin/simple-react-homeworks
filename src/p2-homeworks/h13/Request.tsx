import React, {useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {requestAPI} from './RequestsAPI';
import {requestReducerAC} from './requestReducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';


export function Request() {
    const [checked, setChecked] = useState<boolean>(false);

    let message = useSelector<AppStoreType, string>(state => state.request)

    const dispatch = useDispatch()

    const sendRequest = () => {
        requestAPI.requestPost(checked)
            .then(res => {
                dispatch(requestReducerAC(res.data.errorText))
            })
            .catch(err => {
                console.log({...err});
                console.log(err.response ? err.response.data.errorText : err.message);
                dispatch(requestReducerAC(err.message))
        })
    }


    return (
        <div>
            <div>{message}</div>
            <div>
                <SuperButton onClick={sendRequest}>Send request</SuperButton>
            </div>
            <div>
                <SuperCheckbox checked={checked} onChangeChecked={setChecked}/>
            </div>
        </div>
    )
}