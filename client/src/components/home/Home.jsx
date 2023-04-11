import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Back from '../images/bg1.jpg';
import { makeStyles } from '@material-ui/core';
import Main  from './Main';
import About from './About';
import Contact from './Contact';
import Subjects from './Subjects';

const useStyle = makeStyles({
    img:{
        width: '100%',
        height: 700,
        position: 'cover',
        opacity:0.5
    },
    container:{
        position:'relative',
    },
    main:{
        position:'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: 'fit-content',
        margin: 'auto'
    }
});

function Home(){
    const classes=useStyle();
    return (
        <div id='home'>
            <Nav/>
            <div className={classes.container}>
              <img src={Back} className={classes.img} alt="background"/>
              <div className={classes.main}>
                <Main/>  
              </div>  
            </div> 
            <About />
            <Contact />
            <Subjects />         
            <Footer />
        </div>
    );
}

export default Home;