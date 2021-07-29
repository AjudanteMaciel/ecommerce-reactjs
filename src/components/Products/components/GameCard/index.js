import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    GameCard: {
        display: 'flex',
        padding: theme.spacing(2),
        backgroundColor: 'transparent',
    }
}));

function GameCard({ game }) {
    const classes = useStyles();

    return (
        <Card className={classes.GameCard}>
            <CardActionArea>
                <img src={`images/games/${game.image}`} alt='img' />
            </CardActionArea>
        </Card>
    );
}

export default GameCard;