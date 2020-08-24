import React, {useState} from 'react';
import { AppBar, Toolbar, IconButton, makeStyles, Typography, Button } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { Menu as MenuIcon} from "@material-ui/icons";
import AppDrawer from './AppDrawer';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    colorDefault :{
      background :grey[50],
      
    }
  }));
  

export default function AppBarMain() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    

    return (
        <div>

            <AppBar position="static" classes={{
              colorDefault : classes.colorDefault
            }} color="default">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon onClick={()=>{setOpenDrawer(true)}} />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Raise Ticket
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <AppDrawer open={openDrawer} onCloseDrawer={setOpenDrawer}/>
            

        </div>
    )
}
