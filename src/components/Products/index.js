import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import GameCard from './components/GameCard';
import NavBar from './components/NavBar'

const games = require('../../products.json');

const useStyles = makeStyles((theme) => ({
    Products: {
        display: 'flex',
        background: theme.palette.secondary.main,
        width: '65%',
        flexDirection: 'column',
    },
    games: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
}));

function Products() {
    const classes = useStyles();

    return (

        <div className={classes.Products}>
            <NavBar />
            <div className={classes.games}>
                {
                    games.map(game => (
                        <GameCard key={games.id} game={game} />
                    ))

                }
                {
                    games.map(game => (
                        <GameCard key={games.id} game={game} />
                    ))

                }
            </div>


        </div>

    );
}

export default Products;