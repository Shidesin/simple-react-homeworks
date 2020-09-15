import React, {useState} from 'react';
import {homeWorkReducer, initialStateType, SortAgeAC, SortNameDownAC, SortNameUpAC} from './bll/homeWorkReducer';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import s from '../h2/HW2.module.css';
import styles from '../h2/HW2.module.css';


const initialPeople: initialStateType = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div className={styles.affair} key={p._id}>
            <span >{p.name},</span> <span>{p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, SortNameUpAC()))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, SortNameDownAC()))
    const sortAge = () => setPeople(homeWorkReducer(initialPeople, SortAgeAC()))

    return (
        <div className={s.column}>
            homeworks 8
            <hr/>

            {/*should work (должно работать)*/}

            <div >
                {finalPeople}
                <div >
                    <span><SuperButton onClick={sortUp}>Sort up</SuperButton></span>
                    <span><SuperButton onClick={sortDown}>Sort down</SuperButton></span>
                    <span><SuperButton onClick={sortAge}>Sort age</SuperButton></span>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default HW8;
