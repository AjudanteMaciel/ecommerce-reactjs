import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    BuyCard: {
        display: 'flex',
        backgroundColor: 'transparent',
        
    },
    Card: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: theme.spacing()
    },
    CardActionArea: {
        display: 'flex',
        justifyContent: 'flex-start'
    },
    CardActions: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        paddingRight: theme.spacing(3),
    },
    CardContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
}));

function BuyCard(props) {
    const { game, addToCart, removeFromCart } = props;
    const classes = useStyles();

    return (
        <Card className={classes.Card}>

            <div className={classes.CardActionArea}>
                <img src={`images/games/${game.image}`} alt='img' />

                <CardContent className={classes.CardContent}>
                        <Typography variant="body1">
                            {game.name}
                        </Typography>
                        <Typography className={classes.price} variant="body1">
                            {game.qty} x {`R$${game.price.toFixed(2)}`}
                        </Typography>
                </CardContent>
            </div>

            <div className={classes.CardActions}>
                <Button size="small" color="secondary" variant="outlined" onClick={()=>addToCart(game)}>
                +
                </Button>
                <Button size="small" color="secondary" variant="outlined" onClick={()=>removeFromCart(game)}>
                -
                </Button>
            </div>
            
        </Card>
    );
}

export default BuyCard;