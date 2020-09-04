import React, {ChangeEvent} from 'react';
import s from "./Greeting.module.css";
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {
    const inputClass = error? s.error : s.someClass

    return (
        <div className={s.item}>
            <SuperInputText setError={(error) => {}} value={name} onChange={setNameCallback} className={inputClass} placeholder={'Input your name'}/>
            {/*<input value={name} onChange={setNameCallback} className={inputClass} placeholder={'Input your name'}/>*/}
            <span className={s.span}>{error}</span>
            <SuperButton onClick={addUser}>Add</SuperButton>
            <div className={s.counter}>Greeting users: {totalUsers}</div>
        </div>
    );
}

export default Greeting;
