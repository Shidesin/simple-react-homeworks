let initState = 'some';

type initStateType = string

export const themeReducer = (state = initState, action: changeTheme): initStateType => { //
    switch (action.type) {
        case 'CHANGE_COLOR': {
            let copyState = state
            copyState = action.color
            return copyState;
        }
        default:
            return state;
    }
};

type changeTheme = ReturnType<typeof changeThemeC>

export const changeThemeC = (color: string) => ({type: 'CHANGE_COLOR', color} as const);