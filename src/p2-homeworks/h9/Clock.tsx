import React, {useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    let [date, setDate] = useState<Date>( );
    const [show, setShow] = useState<boolean>(false);



    const stop = () => {
        clearInterval(timerId)
    }

    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate (new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true);

    };

    const onMouseLeave = () => {
        setShow(false)
    };

    const stringTime = `Time:  ${date && date.toLocaleTimeString()}`; // fix with date
    const stringDate = `Date: ${date && date.toLocaleDateString()}`; // fix with date

    return (
        <div>
            <div key={'1'}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div>{stringTime}</div>
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
