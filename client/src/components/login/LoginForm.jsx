import React, { useContext, useState } from 'react';
import axios from "axios";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useHistory } from "react-router-dom";

const LoginForm=()=>{
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const { dispatch } = useContext(AuthContext);

    const history = useHistory();

    const paperStyle={padding :20,height:'90vh',width:320, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    const submitHandler=async(e)=>{
        e.preventDefault();
        console.log(id);
        console.log(password);
        const URL = "http://localhost:8000/api"
        try {
            const student=await axios.post(`${URL}/auth/login`, {
              id,password
            });
            console.log("hiiiiiiiiii");
            if(!student){
                alert("wrong Id or Password")
            }
            console.log(student.data);
            localStorage.setItem('student',JSON.stringify(student.data));
            history.push({pathname: '/ExamPage',state:{data:student.data}});
          } catch (err) {
            alert("Invalid Credentials")
          }
    }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Login</h2>
                </Grid>
                <TextField label='User Id' placeholder='Enter username' fullWidth required onChange={(e)=>setId(e.target.value)} />
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required onChange={(e)=>setPassword(e.target.value)} />
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={submitHandler} >Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default LoginForm