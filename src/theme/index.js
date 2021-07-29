import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#000000',
        }
        
    },
    typography: {
        fontFamily: "Courier New",

    },
    shape: {
        borderRadius: 0,
    }
});

export default theme;