import React from 'react';
import styles from './Message.module.css'

type PropsType = {
    avatar: string,
    name: string,
    message: string
    time: string
}

function Message(props: PropsType) {
    return (
        <div>
            <div className={styles.messages_block}>
                <div className={styles.avatar_block}><img src={props.avatar} alt="avatar"/></div>
                <div className={styles.item}>
                    <div className={styles.name_block}>{props.name}</div>
                    <div className={styles.text_time}>
                        <div className={styles.message_block}>{props.message}</div>
                        <div className={styles.time_block}>{props.time}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;
