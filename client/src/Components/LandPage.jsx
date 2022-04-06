import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + './Nyc.png'})`,  
    backgroundRepeat: 'no-repeat',
    opacity: '.8',
    backgroundSize: 'cover',
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
 <h1 style={{"color": "#d80032", "text-align": "center", "padding": "400px", "font-size": "50px"}}>A NEW YORK MINUTE</h1>
    </div>
  );
}