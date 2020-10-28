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


// export const checkBoxRequest = (success: boolean) => (dispatch: Dispatch<requestReducerType>) => {
//     debugger
//     requestAPI.requestPost(success)
//         .then(res => {
//
//                 dispatch(requestReducerAC(res.data.errorText))
//             })
// }


// export const checkBoxRequest = (success: boolean) => {
//     debugger
//     requestAPI.requestPost(success).then(res => {
//             debugger
//             // res.data.errorText
//         }
//     )
// }