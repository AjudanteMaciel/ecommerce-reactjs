import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    Cart: {
        display: 'flex',
        background: theme.palette.primary.main,
        height: '100%',
        width: '35%'
    }
}));

function Cart() {
    const classes = useStyles();

    return (

        <div className={classes.Cart}>

        </div>

    );
}

export default Cart;