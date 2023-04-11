import React from 'react'
import { Card,div, makeStyles, Box, Button,TextField,FormControl } from '@material-ui/core'
import contact from '../images/contact.png'

const useStyle = makeStyles({
    container: {
        display: 'flex',
        position: 'relative',
        width:'100%'  
    },
    img: {
        height: '580px',
        width: '550px',
        marginLeft:40
    },
    contactForm: {
        width: '50%'
    },
    card:{
        marginLeft:100,
        boxShadow: '5px 10px 8px #888888',
        margin:30,
        padding: 50,
        height: 450,
        width: 370
    },
    inputField: {
        marginBottom: 20,
        width:'380px'
    },
    btn: {
        background: 'black',
        color: 'white',
        marginTop: 10,
        '&:hover': {
            background: "#747578",
            // color: 'black'
         },
    }
})

const Contact = () => {
  const classes = useStyle();
  return (
    <div id='contact' className={classes.container}>
        <Box className={classes.img}>
            <img src={ contact } className={classes.img} alt=""/>
        </Box>
        <Box>
            <Card className={classes.card}>
                <FormControl className={classes.contactForm}>
                    <h2>CONTACT US</h2>
                    <TextField className={classes.inputField} id="standard-basic" label="Name" variant="standard" />
                    <TextField className={classes.inputField} id="standard-basic" label="Email" variant="standard" />
                    <TextField className={classes.inputField} id="standard-basic" label="Contact No." variant="standard" />
                    <TextField className={classes.inputField} id="standard-basic" label="Suggestion" variant="standard" />
                    <Button className={classes.btn} variant="contained">Submit</Button>
                </FormControl>
            </Card>
        </Box>
    </div>
  )
}

export default Contact