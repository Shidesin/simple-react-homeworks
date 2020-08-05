import React, {ChangeEvent} from 'react';
import s from "./Greeting.module.css";

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
    const inputClass = error? s.error :s.someClass

    return (
        <div className={s.item}>
            <input value={name} onChange={setNameCallback} className={inputClass} placeholder={'Input your name'}/>
            <span className={s.span}>{error}</span>
            <button onClick={addUser}>add</button>
            <span className={s.counter}>Counter greeting users: {totalUsers}</span>
        </div>
    );
}

export default Greeting;
