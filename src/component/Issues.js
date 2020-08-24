import React from 'react';
import { Card, CardContent, makeStyles, Radio, RadioGroup, FormControlLabel, TextField } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    }
});

export default function Issues() {
    var classes = useStyles();
    return (
        <div>
            <Card className={classes.root} variant="outlined" >
                <CardContent>
                    <RadioGroup>
                        <FormControlLabel value="0" control={<Radio />} label="Machine is off." />
                        <FormControlLabel value="1" control={<Radio />} label="Machine is struck." />
                        <FormControlLabel value="2" control={<Radio />} label="Machine is not responding." />
                        <FormControlLabel value="3" control={<Radio />} label="Cash struck iin the machine." />
                        <FormControlLabel value="4" control={<Radio />} label={<TextField label="Other"/>} />

                    </RadioGroup>
                </CardContent>
            </Card>
        </div>
    )
}
