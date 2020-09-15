type initialPeopleType = {
    _id: number
    name: string
    age: number
}

export type initialStateType = Array<initialPeopleType>;

const initialPeople: initialStateType = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

export type ActionType = SORT_NAME_UP_ActionType | SORT_NAME_DOWN_ActionType | SORT_AGE_ActionType

export type SORT_NAME_UP_ActionType = {
    type: 'SORT_NAME_UP',
    payload: 'up'
};

export type SORT_NAME_DOWN_ActionType = {
    type: 'SORT_NAME_DOWN',
    payload: 'dowm'
};

export type SORT_AGE_ActionType = {
    type: 'SORT_AGE',
    payload: 18
};

export const SortNameUpAC = (): SORT_NAME_UP_ActionType => ({type: 'SORT_NAME_UP', payload: 'up'})
export const SortNameDownAC = (): SORT_NAME_DOWN_ActionType => ({type: 'SORT_NAME_DOWN', payload: 'dowm'})
export const SortAgeAC = (): SORT_AGE_ActionType => ({type: 'SORT_AGE', payload: 18})


export const homeWorkReducer = (state: initialStateType, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'SORT_NAME_UP': {
            return [...state.sort((a, b) => {
                if (a.name > b.name) {
                    return 1
                }
                if (a.name < b.name) {
                    return -1
                }
                return 0
            })
            ]
        }
        case 'SORT_NAME_DOWN': {
            return [...state.sort((a, b) => {
                if (a.name > b.name) {
                    return -1
                }
                if (a.name < b.name) {
                    return 1
                }
                return 0
            })
            ]
        }
        case 'SORT_AGE':{
            return [...state.filter(el => el.age > action.payload)]

        }
        default:
            return state
    }
};