import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import BuyCard from './components/BuyCard';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    Cart: {
        display: 'flex',
        background: theme.palette.primary.main,
        width: '35%',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center'
        
    },
    CartGames: {
        paddingInline: theme.spacing(6),
        paddingTop: theme.spacing(2),
        maxHeight:  600,
        overflowY: 'auto',
        
    },
    form: {
        display: 'flex'
    }
}));

function Cart(props) {
    const { cartGames, addToCart, removeFromCart } = props;

    const classes = useStyles();

    const subTotal = cartGames.reduce((a, c) => a + c.price * c.qty, 0);
    const frete = subTotal > 250 ? 0 : 10;
    const freteTotal = cartGames.reduce((a, c) => a + c.qty * frete, 0);
    const total = subTotal + freteTotal;

    return (

        <div className={classes.Cart}>
            <div className={classes.CartGames}>
                {
                    cartGames.length === 0 && 
                        <Typography variant='h4'>Cart is empty.</Typography>
                }
                {
                    cartGames.map(game => (
                        <BuyCard 
                        key={game.id} 
                        game={game} 
                        addToCart={addToCart} 
                        removeFromCart={removeFromCart}
                        />
                    ))
                }
            </div>
            <Box display='flex' m={8}>
                <form className={classes.form}>
                    <TextField
                        InputProps={{
                            readOnly: true,
                        }}
                        label="SubTotal"
                        defaultValue="R$0,00"
                        variant="outlined"
                        value={subTotal.toFixed(2)}
                    />
                    <TextField
                        InputProps={{
                            readOnly: true,
                        }}
                        label="Frete"
                        defaultValue="R$0,00"
                        variant="outlined"
                        value={freteTotal.toFixed(2)}
                    />
                    <TextField
                        InputProps={{
                            readOnly: true,
                        }}
                        label="Total"
                        defaultValue="R$0,00"
                        variant="outlined"
                        value={total.toFixed(2)}
                    />
                </form>
            </Box>
        </div>

    );
}

export default Cart;