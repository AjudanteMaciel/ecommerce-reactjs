import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

import Cart from './components/Cart';
import Products from './components/Products';

import theme from './theme';

const useStyles = makeStyles((theme) => ({
  App: {
    display: 'flex',
    height: '100vh',
    flexWrap: 'wrap',
  }
}));

function App() {
  const classes = useStyles();

  const [cartGames, setCardGames] = useState([]);

  const addToCart = (game) => {
    const exists = cartGames.find( x => x.id === game.id);
    console.log('entrou')

    if(exists) {
      setCardGames(cartGames.map((x) =>
        x.id === game.id ? {...exists, qtd: exists.qty + 1} : x 
        )
      );
    } else {
      setCardGames([...cartGames, {...game, qty: 1}]);
      console.log(cartGames)
    }

  }

  return (
    <ThemeProvider theme={theme}>

      <div className={classes.App}>
        <Products addToCart={addToCart}/>
        <Cart cartGames={cartGames}/>
      </div>

    </ThemeProvider>
  );
}

export default App;
