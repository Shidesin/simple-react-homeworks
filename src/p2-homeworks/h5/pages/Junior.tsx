import React from 'react';
import {Paper} from '@material-ui/core';
import HW1 from '../../h1/HW1';
import HW3 from '../../h3/HW3';
import HW7 from '../../h7/HW7';
import HW8 from '../../h8/HW8';
import HW9 from '../../h9/HW9';
import HW10 from '../../h10/HW10';
import HW11 from '../../h11/HW11';

function Junior() {
    return (

        <div>
            <Paper style={{padding: '10px', margin: '10px'}} elevation={5}>
                <HW1/>
            </Paper>
            <Paper style={{padding: '10px', margin: '10px'}} elevation={5}>
                <HW3/>
            </Paper>
            <Paper style={{padding: '10px', margin: '10px'}} elevation={5}>
                <HW7/>
            </Paper>
            <Paper style={{padding: '10px', margin: '10px'}} elevation={5}>
                <HW8/>
            </Paper>
            <Paper style={{padding: '10px', margin: '10px'}} elevation={5}>
                <HW9/>
            </Paper>
            <Paper style={{padding: '30px', margin: '10px'}} elevation={5}>
                <HW10/>
            </Paper>
            <Paper style={{padding: '30px', margin: '10px'}} elevation={5}>
                <HW11/>
            </Paper>
        </div>


    );
}

export default Junior;
