import React from 'react'
import { div, makeStyles, Box, TextField, Button, Divider, Container } from '@material-ui/core'
import insta from '../images/insta.png';
import twitter from '../images/twitter.png';
import fb from '../images/fb.png';
const useStyle = makeStyles({
  container:{
    background: 'black',
    color: 'white',
    padding: '30px'
  },
  top: {
    display: 'flex',
    position: 'relative'
  },
  bottom: {
    display: 'flex',
    position: 'relative'
  },
  slogan:{
    fontWeight:600               
 },
 p:{
     fontSize:18,
     fontFamily:[
         'Square Peg', 'cursive'
     ].join(','),
     marginLeft:10
 },
 box2: {
   marginLeft: 70,
   minWidth:'100px'
 },
 textField: {
   background: 'white',
   color: 'black',
   marginRight: '20px',
   width: '250px'  //  height: '35px'
 },
 btn: {
   padding: 12
 },
 emoji: {
   margin: 7,
   height: 40,
   width: 40
 },
 divide: {
   background: 'white',
   margin: 25
 },
 para: {
   marginLeft: 40
 },
 para1: {
  display: 'flex',
  position: 'relative',
   marginLeft: 400
 }
})

const Footer = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.box2}>
          <h1>Exam Edge</h1>
          <div className={classes.p}><span className={classes.slogan}>Forget</span> the mistake <br/> <span className={classes.slogan}>Remember</span> the lesson.</div>
        </div>
        <Box className={classes.box2}>
           <p className={classes.p}>
             To get more details, <br/> subscribe with your email!
           </p>
           <TextField className={classes.textField}  label="Email" />
           <Button className={classes.btn} variant="contained">Subscribe</Button>
        </Box>
        <Box className={classes.box2}>
          <p className={classes.p}> Follow Us</p>
          <div className={classes.social}>
            <img className={classes.emoji} src={insta} alt=""></img>
            <img className={classes.emoji} src={twitter} alt=""></img>
            <img className={classes.emoji} src={fb} alt=""></img>
          </div>
        </Box>
        <Box className={classes.box2}> 
          <p className={classes.p}>Call Us</p>
          <p className={classes.p}>+91 8862913340</p>
        </Box>
      </div>

      <Divider className={classes.divide} />

      <div className={classes.bottom}>
          <p className={classes.para}>© 2022 ExamEdge, Inc. All rights reserved.</p>
          <Box className={classes.para1}>
          <p className={classes.para}>PRIVACY POLICY</p>
          <p className={classes.para}>TERMS AND CONDITIONS</p>
          </Box>
      </div>
    </div>
  )
}

export default Footer