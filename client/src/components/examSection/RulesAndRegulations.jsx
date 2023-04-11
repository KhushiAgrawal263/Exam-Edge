import React from 'react'
import { useHistory } from "react-router-dom";
import { Typography, makeStyles, Card, ListItem, List, Button, FormControlLabel, Checkbox } from '@material-ui/core'
import ArrowRightSharpIcon from '@material-ui/icons/ArrowRightSharp';
import { useState } from "react";

const useStyle = makeStyles({
    container: {

    },
    card: {
        textAlign: 'center',
        margin: ' 70px auto',
        padding: 50,
        width: 800,
        background: '#e4e7ed',
        boxShadow: '5px 10px 8px #888888',
        fontSize: '18px',
        position: 'relative'
    },
    btn: {
        background: 'black',
        color: 'white',
        marginTop: 50,
        '&:hover': {
            background: "#747578",
            // color: 'black'
         },
    },
    agree: {
        position: 'absolute',
        left: 60
    }
})

const RulesAndRegulations = () => {
    const classes = useStyle();
    const history = useHistory();
    const questions=history.location.state.data;
    const sub=history.location.state.val;
    const [checkboxValidate, setCheckboxValidate] = useState(false);

    const checkFunc = () => {
        setCheckboxValidate(true);
    }

    const handleStartTest = () =>{
        if(checkboxValidate == true){
        // if(window.confirm("Are you sure you want to Start the Exam?")){
            // this.props.history.push('/Start');
            history.push({pathname: '/Start',state:{data:questions,sub:sub}});
        // }
        }
        else {
            alert("Please agree to Rules and Regulations.");
        }
    }

   


  return (
    <Typography className={classes.container}>

        <Card className={classes.card}>
            <h2>Rules And Regulations</h2>
            <List>
                <ListItem> <ArrowRightSharpIcon></ArrowRightSharpIcon> Answer carefully!! You can't revisit the previous question. </ListItem>
                <ListItem> <ArrowRightSharpIcon></ArrowRightSharpIcon> You must use a functioning webcam and microphone.</ListItem>
                <ListItem> <ArrowRightSharpIcon></ArrowRightSharpIcon> No cell phones or other secondary devices in the room or test area</ListItem>
                <ListItem> <ArrowRightSharpIcon></ArrowRightSharpIcon> Your desk/table must be clear or any materials except your test-taking device</ListItem>
                <ListItem> <ArrowRightSharpIcon></ArrowRightSharpIcon> No one else can be in the room with you</ListItem>
                <ListItem> <ArrowRightSharpIcon></ArrowRightSharpIcon> The testing room must be well-lit and you must be clearly visible</ListItem>
                <ListItem> <ArrowRightSharpIcon></ArrowRightSharpIcon> No dual screens/monitors</ListItem>
                <ListItem> <ArrowRightSharpIcon></ArrowRightSharpIcon> Do not leave the camera </ListItem>
                <ListItem> <ArrowRightSharpIcon></ArrowRightSharpIcon> No use of additional applications or internet</ListItem>
            </List>
            <Typography className={classes.agree}>
            <form  >
                <FormControlLabel  control={< Checkbox color="success" onClick={checkFunc} />} label="I Agree to the terms and conditions."  />
                {/* <input type='checkbox' required /> */}
                {/* <input type="text" value='I Agree to the terms and conditions.' /> */}
                {/* <Checkbox required={true}> I Agree to the terms and conditions.</Checkbox> */}
            </form>
            </Typography>
            <Button onClick={handleStartTest} className={classes.btn} variant="contained">Start Test</Button>
        </Card>

    </Typography>
  )
}

export default RulesAndRegulations