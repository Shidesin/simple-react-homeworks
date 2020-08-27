import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from 'uuid';
import s from './HW3.module.css'

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState < Array<UserType> >([]);
    const addUserCallback = (name: string) => {
        let newUser = {_id: v1(), name: name }
        let newUsers = [newUser, ...users]
        setUsers(newUsers);
    }
    console.log(users)
    return (
        <div className={s.column}>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    );
}

export default HW3;
