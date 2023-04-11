import * as React from 'react';
import { TableCell,Table,TableBody,Paper,TableContainer,TableHead,TableRow, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import ExamNav from './ExamNav';
import Footer from '../home/Footer';


const useStyle = makeStyles({
   exam:{
       textAlign:'center',
       fontSize:'2.5rem'
   },
   detail:{
    marginLeft:235,
    marginTop:40,
    marginBottom:-15,
    fontSize:'1.2rem'
   },
   result:{
    fontSize:'2.5rem',
    // color:'blue',   
    textAlign:'center'
    },
    table:{
        margin:'auto',
        marginTop:50,
        padding: '20px 50px 20px 50px',
        boxShadow: '5px 10px 8px #888888',
        background: '#e4e7ed',
        width:'700px' 
    },
    btn:{
        padding:'10px',
        background:'black',
        color:'white',
        margin: '50px 0px',
        boxShadow: '5px 10px 8px #888888',
        '&:hover': {
          // background: "#747578",
          color: 'black'
        }
    },
    button:{
        textAlign:'center',
        marginTop:25,
        color: 'white'
       },
    s:{
        fontWeight:700
    },
    row:{
        // marginTop:0,
        // background:'black',
    }
});

function createData(
  subject: string,
  score: number,
  percent: number
) {
  return { subject, score, percent };
}

export default function FinalResult() {
    const classes=useStyle();

    const history = useHistory();

    const homePageHandler = () => {
      localStorage.removeItem('student');
      localStorage.removeItem('Os');
      localStorage.removeItem('Cn');
      localStorage.removeItem('Ds');
      localStorage.removeItem('To');
      localStorage.removeItem('Dm');
      history.push('/')
    }

    const student = JSON.parse(localStorage.getItem('student'));
    const Os = JSON.parse(localStorage.getItem('Os'));
    const Cn = JSON.parse(localStorage.getItem('Cn'));
    const Ds = JSON.parse(localStorage.getItem('Ds'));
    const Dm = JSON.parse(localStorage.getItem('Dm'));
    const To = JSON.parse(localStorage.getItem('To'));

    const Osp = ((Os/15)*100).toFixed(2);
    const Cnp = ((Cn/15)*100).toFixed(2);
    const Dsp = ((Ds/15)*100).toFixed(2);
    const Dmp = ((Dm/15)*100).toFixed(2);
    const Top = ((To/15)*100).toFixed(2);

    const result = (parseInt(Osp) + parseInt(Cnp) + parseInt(Dsp) + parseInt(Dmp) + parseInt(Top))/5;
    
    const rows = [
      createData('Operating System',Os, Osp),
      createData('Computer Network', Cn, Cnp),
      createData('Theory Of Computation',To, Top),
      createData('Database',Dm, Dmp),
      createData('Algorithms',Ds, Dsp),
    ];
  return (
    <div> 
      <ExamNav />
     <div>
         {/* <h1 className={classes.exam}>Exam Edge</h1> */}
         <h1 className={classes.result}>Result</h1>
    </div> 
    <div className={classes.detail}>
       <p><span className={classes.s}>Student Name:</span> {student.firstname} {student.lastname}</p>
       <p><span className={classes.s}>Address:</span> {student.address}</p>
       <p><span className={classes.s}>Email:</span> {student.emailId}</p>
       <p><span className={classes.s}>Result:</span> {result}%</p> 
    </div>
    <TableContainer component={Paper} className={classes.table}>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead className={classes.row}>
          <TableRow> 
        {/* //   style={{border:'2px solid black'}}> */}
            <TableCell style={{fontWeight:'600',fontSize:'1.4rem',textAlign:'center',color:'black'}}>Subject Name</TableCell>
            <TableCell style={{fontWeight:'600',fontSize:'1.4rem',textAlign:'center',color:'black'}}>Score</TableCell>
            <TableCell style={{fontWeight:'600',fontSize:'1.4rem',textAlign:'center',color:'black'}}>Percentage</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody> 
        {/* // style={{border:'2px solid black'}}> */}
          {rows.map((row) => (
            <TableRow
              key={row.subject}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  style={{fontSize:'1.2rem',textAlign:'center'}} component="th" scope="row">
                {row.subject}
              </TableCell>
              <TableCell style={{fontSize:'1.2rem',textAlign:'center'}} >{row.score}</TableCell>
              <TableCell style={{fontSize:'1.2rem',textAlign:'center'}}>{row.percent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div className={classes.button}>
    <Button className={classes.btn} onClick={homePageHandler}>Back to Home</Button>
    </div>
    <Footer />
    </div>
  );
}

// export default FinalResult;
