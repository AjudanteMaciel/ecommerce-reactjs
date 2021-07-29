import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    NavBar: {
        width: "65%",
        height: 50,
    }
}));

function NavBar() {
    const classes = useStyles();

    return (

        <div className={classes.NavBar}>

        </div>

    );
}

export default NavBar;