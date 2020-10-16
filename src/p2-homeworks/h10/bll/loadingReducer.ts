let initState =  false;

export const loadingReducer = (state = initState, action: loadingACType): boolean=> { // fix any
    switch (action.type) {
        case 'SET_LOAD': {
            debugger
            return (
                action.payload
            )
        }
        default:
            return state;
    }
};

type loadingACType = {
    type: 'SET_LOAD'
    payload: boolean
}

export const loadingAC = (load: boolean): loadingACType => {
    debugger
    return {type: 'SET_LOAD', payload: load}
}; // fix any