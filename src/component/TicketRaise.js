import React, { useState } from 'react';
import Issues from './Issues';
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    }
}));

export default function TicketRaise() {
    var classes = useStyles();
    const [disable, setDisable] = useState(false);

    var submitHandler = ()=>{
        setDisable(true);
    };

    return (
        <div>
            <Issues />
            <Button variant="contained" onClick={submitHandler} disabled={disable} color="primary" size="large" className={classes.margin}>Submit</Button>

        </div>
    )
}
