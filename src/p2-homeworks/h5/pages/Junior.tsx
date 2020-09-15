import React from "react";
import HW1 from "../../h1/HW1";
import HW3 from "../../h3/HW3";
import {Paper} from '@material-ui/core';
import HW7 from '../../h7/HW7';
import HW8 from '../../h8/HW8';

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
                    <HW7 />
                </Paper>
                <Paper style={{padding: '10px', margin: '10px'}} elevation={5}>
                    <HW8 />
                </Paper>

            </div>


    );
}

export default Junior;
