import React from 'react';
import Nav from '../home/Nav';
import { makeStyles } from '@material-ui/core';
import SignInOutContainer from '../../container/SignInOutContainer';
import Back from '../images/bg1.jpg';
import Footer from '../home/Footer';

const useStyle = makeStyles({
   img:{
       width: '100%',
       height: 900,
       position: 'cover',
       opacity:0.4
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

const Login = () => {
   const classes=useStyle();
   return (
       <div>
           <Nav/>
           <div className={classes.container}>
             <img src={Back} className={classes.img} alt="background"/>
             <div className={classes.main}>
               <SignInOutContainer/>  
             </div>  
           </div>          
           <Footer />
       </div>
   );
}

export default Login
