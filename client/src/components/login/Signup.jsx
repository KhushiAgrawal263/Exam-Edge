import React from 'react';
import { useRef, useState, useContext } from 'react'; 
import axios from "axios";
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { AuthContext } from "../../context/authContext/AuthContext";
import { getId } from '../../context/authContext/apiCalls';
import { useHistory } from 'react-router-dom';

const Signup = () => {
    const { dispatch } = useContext(AuthContext);
    const paperStyle = { padding: 20, width: 320,height:'90vh', margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const history = useHistory();

    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [gender,setGender]=useState("");
    const [address,setAddress]=useState("");

    
    const [phone,setPhone]=useState("");
    
    const URL = "http://localhost:8000/api";

    const submitHandler=async (e)=>{
        e.preventDefault();

        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        const emailValidate = regex.test(email);

        let regex1 = new RegExp('[A-Za-z]');
        const firstNameValidate = regex1.test(firstName);
        const lastNameValidate = regex1.test(lastName);

        
        
        if(emailValidate && phone) {
            if(firstNameValidate && lastNameValidate)
            {
                let phoneno = /^\d{10}$/;
                if(phone.match(phoneno))
                {
                    try {
                        const student=await axios.post(`${URL}/auth/register`, {
                        firstname:firstName,
                        lastname:lastName,
                        emailId:email,
                        gender:gender,
                        contactNo:phone,
                        address:address
                        });
                        // console.log(student.data);
                        // getId(student.data.accessToken,dispatch);
                        console.log(student.data.password);
                        console.log(student.data.id);
                        alert("Id : " +  student.data.id + "\n" + "Password : " +  student.data.password);
                        history.push('/');
                        // <Alert severity="success">This is a success alert — check it out!</Alert>
                    } catch (err) {}
                }
                else
                {
                    alert("Not a valid Phone Number");
                }
            }
            else{
                alert("Enter Valid First Name or Last Name.")
            }
        }else{
            alert("Enter valid Email");
        }
            
            
        // console.log(name,email,password,gender);
    }

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Register</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form >
                    <TextField required fullWidth label='First Name' placeholder="Enter your first name" 
                        onChange={(e) => setFirstName(e.target.value)} />
                    <TextField required fullWidth label='Last Name' placeholder="Enter your last name" 
                        onChange={(e) => setLastName(e.target.value)} />
                    <TextField required type='email' fullWidth label='Email' placeholder="Enter your email" 
              onChange={(e) => setEmail(e.target.value)} />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }} 
              onChange={(e) => setGender(e.target.value)} >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField required type="number" fullWidth label='Phone Number' placeholder="Enter your phone number" 
              onChange={(e) => setPhone(e.target.value)} />

<TextField fullWidth label='Address' placeholder="Enter your Address" 
              onChange={(e) => setAddress(e.target.value)} />

                    {/* <TextField fullWidth label='Password' placeholder="Enter your password"  */}
            {/* //  onChange={(e) => setPassword(e.target.value)} /> */}
            {/* //         <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"  */}
            {/* //   onChange={(e) => setCPassword(e.target.value)} /> */}
                    {/* <FormControlLabel
                        control={<Checkbox name="checkedA" required/>}
                        label="I accept the terms and conditions."
                    /> */}
                    <Button style={{marginTop : 10 }} type='submit' variant='contained' color='primary' onClick={submitHandler}  >Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;