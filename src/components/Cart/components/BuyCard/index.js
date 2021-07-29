import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    BuyCard: {
        display: 'flex',
        backgroundColor: 'transparent',
        alignItems: 'flex-start',
    },
}));

function BuyCard({ game }) {
    const classes = useStyles();

    return (
        <Card className={classes.GameCard}>
            <CardActionArea>
                <img src={`images/games/${game.image}`} alt='img' />

                <CardContent className={classes.CardContent}>
                    <div>
                        <Typography variant="body1">
                            {game.name}
                        </Typography>
                        <Typography className={classes.price} variant="body1">
                            {`R$ ${game.price}`}
                        </Typography>
                    </div>
                    <Typography className={classes.score} variant="body1">
                        {`score ${game.score}`}
                    </Typography>
                </CardContent>

            </CardActionArea>
        </Card>
    );
}

export default BuyCard;