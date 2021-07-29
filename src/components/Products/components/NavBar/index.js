import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    NavBar: {
        display: 'flex',
        width: "100%",
        height: "100%",

        color: 'white',
        marginBottom: theme.spacing(2),

        flexDirection: 'column'
    },
    UpperBar: {
        display: 'flex',
        alignSelf: 'center',
        margin: theme.spacing(2),
    },
    FilterBar: {
        marginLeft: theme.spacing(6),
    },
    blink: {
        animation: '$blinker 0.9s infinite'
    },
    '@keyframes blinker': {
        from: { opacity: 0 },
        to: { opacity: 1 },
    },
}));

function NavBar() {
    const classes = useStyles();

    return (
        
        <div className={classes.NavBar}>
            <div className={classes.UpperBar}>
                <Typography variant='h6'>Hello!</Typography>
                <Typography variant='h6' className={classes.blink}>_</Typography>
            </div>
            <div className={classes.FilterBar}>
                <Typography variant='h6'>Hello!</Typography>
            </div>
                
        </div>


    );
}

export default NavBar;