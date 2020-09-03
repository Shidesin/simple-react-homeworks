import React from 'react';
import {AffairType} from './HW2';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import styles from './HW2.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };

    return (
        <div className={styles.affair_style}>
            <span className={styles.affair}>{props.affair.name}</span>

                <SuperButton onClick={deleteCallback}>X</SuperButton>



        </div>
    );
}

export default Affair;
