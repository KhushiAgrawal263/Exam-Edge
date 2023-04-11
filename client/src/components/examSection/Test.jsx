import React, { useEffect } from 'react'
import { useState } from "react";
import { Typography, makeStyles, Card, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import axios from "axios";

const useStyle = makeStyles({
    conatiner: {
        margin: '50px auto'
    },
    btn: {
        color: 'white',
        background: 'green',
        height: 40,
        margin: 'auto',
        marginRight:50,
        textTransform: 'none',
        fontSize: '1.1rem',
        '&:hover': {
            background: "#e4e7ed",
            color: 'green'
         },
    },
    card: {
        display: 'flex',
        position: 'relative',
        padding: '50px',
        height:50,
        width: 900,
        margin: ' 40px auto',
        background: '#e4e7ed',
        boxShadow: '5px 10px 8px #888888'
    },
    content:{
        display:'flex',
        position: 'relative',
        justifyContent:'center'
    },
    para:{
        marginLeft:140,
        fontSize:18
    },
    btn2: {
        color: 'white',
        background: 'green',
        height: 50,
        width: 120,
        border: 'none',
        borderRadius: '5px',
        fontSize: '1.2rem',
        padding: '10px',
        margin: '50px 20px',
        boxShadow: '5px 10px 8px #888888',
        position: 'relative',
        left: 550,
        '&:hover': {
            background: "#e4e7ed",
            color: 'green'
         }
  }
})

const Test = () => {
    const classes = useStyle();
    const history = useHistory();
    var count =0;
    console.log(JSON.parse(localStorage.getItem('Os')));
    if(JSON.parse(localStorage.getItem('Os'))){
        count = 1;
    }
    if(JSON.parse(localStorage.getItem('Cn'))){
        count =2
    }
    if(JSON.parse(localStorage.getItem('To'))){
        count =3
    }
    if(JSON.parse(localStorage.getItem('Dm'))){
        count =4
    }
    if(JSON.parse(localStorage.getItem('Ds'))){
        count =5
    }

    const student = JSON.parse(localStorage.getItem('student'))
    const [disabled, setDisabled] = useState(false);
    var questions=[];

    const handleStartTestButton = async (val) => {
        console.log(val);
        if(window.confirm("Are you sure you want to Start the Exam?")){
            const URL = "http://localhost:8000/api"
            try {
                const question=await axios.get(`${URL}/exam/${val}`);
                questions = question.data;
            } catch (err) {
                console.log(err);
            }
            // setTestDone(val);
            history.push({pathname: '/Rules',state:{data:questions,val:val}});
            setDisabled(true);

        }
    }

    const finalResultHandler = () => {
        history.push('/finalResult')
      }

  return (
      <Typography className={classes.conatiner}>
          <p className={classes.para}>Welcome <b>{student.firstname} {student.lastname} </b>, Please select the subjects given below <br/> sequentially and click on Start Test to begin. </p>

          <Card className={classes.card}>
              <Typography>
                    <h2>Operating System</h2>
              </Typography>
              {
                  count===0 ? 
                  <Button 
                  onClick={() => handleStartTestButton('Operating System')}  
                  className={classes.btn} 
                  variant='conatined'
                > Start Test
                </Button>: 
                <Button 
                onClick={() => handleStartTestButton('Operating System')}  
                className={classes.btn} 
                variant='conatined'
                disabled
              >Start Test
              </Button>
              }         
          </Card>

          <Card className={classes.card}>
              <Typography>
                    <h2>Computer Networks</h2>
              </Typography>
              {
                  count===1 ? 
                  <Button 
                  onClick={() => handleStartTestButton('Computer Network')}  
                  className={classes.btn} 
                  variant='conatined'
                > Start Test
                </Button>: 
                <Button 
                onClick={() => handleStartTestButton('Computer Network')}  
                className={classes.btn} 
                variant='conatined'
                disabled
              >Start Test
              </Button>
              }       
          </Card>

          <Card className={classes.card}>
              <Typography>
                    <h2>Theory Of Computation</h2>
              </Typography>
              {
                  count===2 ? 
                  <Button 
                  onClick={() => handleStartTestButton('Theory Of Computation')}  
                  className={classes.btn} 
                  variant='conatined'
                > Start Test
                </Button>: 
                <Button 
                onClick={() => handleStartTestButton('Theory Of Computation')}  
                className={classes.btn} 
                variant='conatined'
                disabled
              >Start Test
              </Button>
              }         
          </Card>

          <Card className={classes.card}>
              <Typography>
                    <h2>Database Management</h2>
              </Typography>
              {
                  count===3 ? 
                  <Button 
                  onClick={() => handleStartTestButton('Database Management System')}  
                  className={classes.btn} 
                  variant='conatined'
                > Start Test
                </Button>: 
                <Button 
                onClick={() => handleStartTestButton('Database Management System')}  
                className={classes.btn} 
                variant='conatined'
                disabled
              >Start Test
              </Button>
              }        
          </Card>

          <Card className={classes.card}>
              <Typography>
                    <h2>Data Structure & Algorithms</h2>
              </Typography>
              {
                  count===4 ? 
                  <Button 
                  onClick={() => handleStartTestButton('Data Structure & Algorithm')}  
                  className={classes.btn} 
                  variant='conatined'
                > Start Test
                </Button>: 
                <Button 
                onClick={() => handleStartTestButton('Data Structure & Algorithm')}  
                className={classes.btn} 
                variant='conatined'
                disabled
              >Start Test
              </Button>
              }  
          </Card>
          {
              count==5 ? <Button className={classes.btn2} onClick={finalResultHandler}>Result</Button> : <Button className={classes.btn2} onClick={finalResultHandler} disabled>Result</Button>
          }
      </Typography>
  )
}

export default Test