import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import BuyCard from './components/BuyCard';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    Cart: {
        display: 'flex',
        background: theme.palette.primary.main,
        width: '35%',

    }
}));

function Cart(props) {

    const { cartGames } = props;

    const classes = useStyles();

    return (

        <div className={classes.Cart}>
            <div>
                {cartGames.length === 0 && <div>Cart is empty</div>}
                {
                    cartGames.map(game => (
                        <BuyCard key={game.id} game={game}/>
                    ))
                }
            </div>
        </div>

    );
}

export default Cart;