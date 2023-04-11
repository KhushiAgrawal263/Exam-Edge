import React from 'react'
import { Typography, makeStyles} from '@material-ui/core'
import ExamNav from './ExamNav'
import Test from './Test';
import Footer from '../home/Footer';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles({
  btn: {
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

const ExamFirstPage = () => {
  const history = useHistory();
  const classes = useStyle();


  return (
    <Typography>
      <ExamNav />
      <Test />
      <Footer/>
    </Typography>
  )
}

export default ExamFirstPage