import React from "react";
import HW1 from "../../h1/HW1";
import HW2 from "../../h2/HW2";
import HW3 from "../../h3/HW3";
import HW4 from "../../h4/HW4";
import {Paper} from '@material-ui/core';

function PreJunior() {
    return (
            <div>
                <Paper style={{padding: '10px', margin: '10px'}} elevation={5}>
                    <HW1/>
                </Paper>
                {/*<HW2/>*/}
                {/*<HW3/>*/}
                {/*<HW4/>*/}
                {/*<HW6/>*/}
            </div>
    );
}

export default PreJunior;
