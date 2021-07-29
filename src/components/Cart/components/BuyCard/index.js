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
}));

function BuyCard(props) {
    const { game } = props
    const classes = useStyles();

    return (
        <Card className={classes.Card}>

            <CardActionArea className={classes.CardActionArea}>
                <img src={`images/games/${game.image}`} alt='img' />

                <CardContent>
                        <Typography variant="body1">
                            {game.name}
                        </Typography>
                        <Typography className={classes.price} variant="body1">
                            {game.qty} x {`R$ ${game.price.toFixed(2)}`}
                        </Typography>
                </CardContent>
            </CardActionArea>

            <div className={classes.CardActions}>
                <Button size="small" color="secondary" variant="outlined">
                +
                </Button>
                <Button size="small" color="secondary" variant="outlined">
                -
                </Button>
            </div>
            
        </Card>
    );
}

export default BuyCard;