import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import GameCard from './components/GameCard';
import NavBar from './components/NavBar'

const data = require('../../products.json');

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

    const [games, setGames] = useState(data);

    const sorted = function(type) {
        console.log('chamou')
        switch(type){
            case 'a-z':
                console.log('a-z')
                setGames([...games.sort((a, b) => a.name > b.name? 1: -1)])
                break;
            case 'price':
                console.log('price')
                setGames([...games.sort((a, b) => a.price - b.price)])
                break;
            case 'score':
                console.log('score')
                setGames([...games.sort((a, b) =>  b.score - a.score)])
                break;
            default:
                setGames([...games.sort((a, b) => a.name - b.name)])
                break;
        }

    }
    
    return (

        <div className={classes.Products}>
            <NavBar sorted={sorted}/>
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