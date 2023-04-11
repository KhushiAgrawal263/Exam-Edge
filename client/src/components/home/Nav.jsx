import React  from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { makeStyles,Box, div } from '@material-ui/core';
import {  Link } from "react-scroll";
import zIndex from '@material-ui/core/styles/zIndex';

const useStyle = makeStyles({
  component: {
      display: 'flex',
      // width:'100%',
      justifyContent: 'space-between',
      maxWidth: '100%',
      backgroundColor:'#000000',
      position:'relative'
  },
  container: {
      padding: '12px 8px', 
      textAlign: 'center'
  },
  logo: {
      width:84,
      fontSize:30,
      marginLeft: 50,
      // height:80,
      zIndex:1,
      color: 'white'
  },
  text:{
    color:'white'
  },
  box:{
    // marginLeft:1070,
    position:'absolute',
    left:800,
    minWidth:'400px'
  },
  link: {
    color:'white',
    margin: 10,
    fontSize: '1.1rem',
    cursor:"pointer",
    width:'100px'
  }
});

const Nav = () => {
  const classes = useStyle();

  return (    
    <div position="static" className={classes.component}>
      <div >
        <Toolbar >
            <div className={classes.logo}>ExamEdge</div>
        
          <div className={classes.box}> 
              <Link
                  activeClass="active"
                  className={classes.link}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
              >
                Home
              </Link>

              <Link
                  activeClass="active"
                  className={classes.link}
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
              >
                About
              </Link>


              <Link
                  activeClass="active"
                  className={classes.link}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
              >
                Contact Us
              </Link>

              <Link
                  activeClass="active"
                  className={classes.link}
                  to="subjects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
              >
                Subjects
              </Link>
          
          </div>
        </Toolbar>
      </div>
    </div>
  );
};
export default Nav;
