import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const useStyles = makeStyles((theme) => ({
    NavBar: {
        display: 'flex',
        width: "100%",

        color: 'white',
        marginBottom: theme.spacing(6),

        flexDirection: 'column',
        alignItems: 'center'
    },
    UpperBar: {
        display: 'flex',
        margin: theme.spacing(2),
    },
    FilterBar: {
        display: 'flex',
        
    },
    blink: {
        animation: '$blinker 0.9s infinite'
    },
    '@keyframes blinker': {
        from: { opacity: 0 },
        to: { opacity: 1 },
    },
}));

function NavBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.NavBar}>
            <div className={classes.UpperBar}>
                <Typography variant='h6'>Hello!</Typography>
                <Typography variant='h6' className={classes.blink}>_</Typography>
            </div>

            <div className={classes.FilterBar}>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button
                        onClick={()=>props.sorted('a-z')}
                    >
                        A-Z
                    </Button>

                    <Button
                        onClick={()=>props.sorted('price')}
                    >
                        price
                    </Button>
                    
                    <Button
                        onClick={()=>props.sorted('score')}
                    >
                        Score
                    </Button>
                </ButtonGroup>
            </div>
                
        </div>


    );
}

export default NavBar;