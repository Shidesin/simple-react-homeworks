import React from 'react';
import HW1 from '../../h1/HW1';
import HW4 from '../../h4/HW4';
import {Paper} from '@material-ui/core';
import HW6 from '../../h6/HW6';
import HW12 from '../../h12/HW12';
import HW13 from '../../h13/HW13';

function JuniorPlus() {
    return (
        <div>
            <Paper style={{padding: '10px', margin: '10px'}} elevation={5}>
                <HW1/>
            </Paper>
            <Paper style={{padding: '10px', margin: '10px'}} elevation={5}>
                <HW4/>
            </Paper>
            <Paper style={{padding: '10px', margin: '10px'}} elevation={5}>
                <HW12/>
            </Paper>
            <Paper style={{padding: '10px', margin: '10px'}} elevation={5}>
                <HW13/>
            </Paper>
        </div>


    );
}

export default JuniorPlus;
