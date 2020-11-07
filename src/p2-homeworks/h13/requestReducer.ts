import {requestAPI} from './RequestsAPI';
import {Dispatch} from 'react';

let initState = 'No message...';

type initStateType = string

export const requestReducer = (state = initState, action: requestReducerType): initStateType => { //
    switch (action.type) {
        case 'SET_MESSAGE':
            let copyState = state
            copyState = action.message
            return copyState;
        default:
            return state;
    }
};

type requestReducerType = ReturnType<typeof requestReducerAC>

export const requestReducerAC = (message: string) => ({type: 'SET_MESSAGE', message} as const);


export const checkBoxRequest = (success: boolean) => (dispatch: Dispatch<requestReducerType>) => {
    debugger
    requestAPI.requestPost(success)
        .then(res => {
            dispatch(requestReducerAC(res.data.errorText))
        })
        .catch(err => {
            console.log({...err});
            console.log(err.response ? err.response.data.errorText : err.message);
            dispatch(requestReducerAC(err.message))
        })
}
