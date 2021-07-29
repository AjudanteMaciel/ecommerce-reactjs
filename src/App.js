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

  const [cartGames, setCartGames] = useState([]);

  const addToCart = (game) => {
    const exists = cartGames.find( x => x.id === game.id);

    if(exists) {
      setCartGames(cartGames.map((x) =>
        x.id === game.id ? {...exists, qty: exists.qty + 1} : x 
        )
      );
    } else {
      setCartGames([...cartGames, {...game, qty: 1}]);
    }

  }

  const removeFromCart = (game) => {
    const exists = cartGames.find((x) => x.id === game.id);
    if(exists.qty === 1) {
      setCartGames(cartGames.filter((x) => x.id !== game.id));
    } else {
      setCartGames(cartGames.map((x) =>
        x.id === game.id ? {...exists, qty: exists.qty - 1} : x 
        )
      );
    }
  }

  return (
    <ThemeProvider theme={theme}>

      <div className={classes.App}>
        <Products addToCart={addToCart}/>
        <Cart cartGames={cartGames} addToCart={addToCart} removeFromCart={removeFromCart}/>
      </div>

    </ThemeProvider>
  );
}

export default App;
