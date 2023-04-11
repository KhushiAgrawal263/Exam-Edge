import React from 'react'
import { div, makeStyles, Button } from '@material-ui/core'
import about from '../images/aboutimg.png';

const useStyle = makeStyles({
    container:{
        display: 'flex',
        position: 'relative',
        width:'100%'
        // background: '#b6edf2'
    },
    left: {
        margin: "50px",
        padding: "20px",
        width:'45%'
    },
    right: {
        margin: "50px",
        width:'40%'
    },
    img: {
        height: 450,
        width: 500
    },
    btn: {
        color: "white",
        background: "black",
        marginTop: "20px",
        '&:hover': {
            background: "#747578",
            // color: 'black'
         },
    },
    title: {
        fontSize: 50,
        fontWeight: 600
    },
    para: {
        fontSize: 18,
        fontWeight: 500
    }

})

const About = () => {
    const classes = useStyle();
  return (
    <div id='about' className={classes.container}> 
        <div className={classes.left}>
            <h1 className={classes.title}>About Us</h1>
            <p className={classes.para}>
            Exams are conducted by all organizations to assess the suitability of the applicants, who could be students and working professionals. 
            These help evaluate the suitability of the prospects for the applied position. <br/>
            Compared to the traditional pen-paper exams, online examinations are far more cost effective. 
            These help in objectively assessing the eligibility of the candidates for the profile or vacancy applied for. Online tests could be conducted easily even for the students situated in remote areas, as one need not physically visit an exam center for the same. Timer-based online exams ensure fair play for all, as all examinees are given same amount of time to complete the test.
            </p>
            <Button className= {classes.btn} variant="contained">Learn More</Button>
        </div>
        <div className={classes.right}>
            <img className={classes.img} src= { about } alt="" />
        </div>
    </div>
  )
}

export default About