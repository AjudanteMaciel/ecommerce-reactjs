import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import GameCard from './components/GameCard';
import NavBar from './components/NavBar'

const games = require('../../products.json');

const useStyles = makeStyles((theme) => ({
    Products: {
        background: theme.palette.secondary.main,
        height: '100%',
        width: '65%'
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
            </div>

        </div>

    );
}

export default Products;