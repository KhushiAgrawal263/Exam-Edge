import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Login from './components/login/Login';
import ExamFirstPage from './components/examSection/ExamFirstPage';
import RulesAndRegulations from './components/examSection/RulesAndRegulations';
import StartExam from './components/quiz/StartExam';
import QuizSummary from './components/quiz/QuizSummary';
import FinalResult from './components/examSection/FinalResult';


function App() {
  return (
    <React.Fragment>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/Login" component={Login}></Route>
      <Route exact path ="/ExamPage" component={ExamFirstPage} ></Route>
      <Route exact path ="/Rules" component={RulesAndRegulations} ></Route>
      <Route exact path ="/Start" component={StartExam} ></Route>  
      <Route exact path ="/Summary" component={QuizSummary} ></Route> 
      <Route exact path ="/finalResult" component={FinalResult} ></Route>  
      <Redirect to='/'/>
    </Switch>
    </React.Fragment>
  );
}

export default App;
