import * as React from 'react';
import { makeStyles,Button,Card,CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import Logo from '../images/logo.jpeg';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles({
    card:{
       marginRight:1000,
       marginLeft:70,
       width:500,
       border:'none',
       boxShadow:'none',
       background:'transparent',
       borderRadius:0,
       position:'absolute',
       top:-200
    },
    img:{
        width: 300,
        height: 110,
        objectFit:'cover',
        marginLeft:'15px'
    },
    slogan:{
       fontWeight:600               
    },
    p:{
        fontSize:20,
        fontFamily:[
            'Square Peg', 'cursive'
        ].join(','),
        marginLeft:50
    },
    button:{
        backgroundColor:'black',
        color:'white',
        padding:'7px',
        marginLeft:60,
        '&:hover': {
          background: "#747578",
          // color: 'black'
       },
    }
});

export default function Main() {
    const classes=useStyle();
    let history = useHistory();

  return (
    <Card id='main' className={classes.card}>
      <img
        className={classes.img}
        component="img"
        alt="green iguana"
        src= {Logo}
      />
      <CardContent>
         <Typography className={classes.p}><span className={classes.slogan}>Forget</span> the mistake <br/> <span className={classes.slogan}>Remember</span> the lesson.</Typography>
      </CardContent>
      <CardActions className={classes.b}>
        <Button className={classes.button} 
          onClick= {() => {
            history.push("/Login");
          }} 
          > Register / Login </Button>
      </CardActions>
    </Card>
  );
}
