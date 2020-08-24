import React from 'react';
import { Drawer, makeStyles, List, ListItem, ListItemText } from "@material-ui/core";

var useStyles = makeStyles({
    list: {
        width: 250,
    }

});

export default function AppDrawer({ open, onCloseDrawer }) {

    var classes = useStyles();

    return (
        <div>
            <Drawer anchor="left" open={open} onClose={() => { onCloseDrawer(false) }}>
                <div className={classes.list}>

                    <List>
                        <ListItem button >
                            <ListItemText primary={"About us"} />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    )
}
