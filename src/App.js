import React from 'react';
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

  return (
    <ThemeProvider theme={theme}>

      <div className={classes.App}>
        <Products />
        <Cart />
      </div>

    </ThemeProvider>
  );
}

export default App;
