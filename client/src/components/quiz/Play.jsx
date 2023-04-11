// 


import React, {  Fragment ,Component } from "react";
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
// import questions from '../../question.json';
import isEmpty from "../../utils/is-empty";
import { useHistory, withRouter } from "react-router-dom";
import { useState } from "react";
import { FormControlLabel, FormControl, FormLabel, RadioGroup, Radio } from '@material-ui/core';



const styles = theme => ({
    questions:{
        marginTop:70,
        background:"#e4e7ed",
        borderLeft:"5px solid #66b8c4",
        width:"60%",
        margin:"50px auto",
        padding:"30px 50px",
        height:450
    },
    h2heading : {
        textAlign: "center",
        fontWeight: 700,
        fontSize: "3rem"
    },
    lifeline:{
        marginLeft:600,
        fontWeight: 700,
        fontSize: '1.1rem'
    },
    ofQuestion: {
        fontWeight: 700,
        fontSize: '1.1rem'
    },
    heading:{
        fontSize:"1.5rem",
        marginBottom:10,
        lineHeight:1.5
    },
    opt:{
        // display:"inline-block",
        // display: "flex",
        // width:"100%",
        margin: "0px",
        marginLeft: "-50px"
    },
    options:{
        // background:"#66b8c4",
        // borderRadius:"7px",
        // color:"white",
        margin:20,
        padding:8,
        cursor:"pointer",
        // height: 35,
        fontSize: "2rem",
        // width: "100%",
        // '&:hover': {
        //     background: "#56b9e3",
        //  },

        // color: "red",
        display : "flex",
        
    },
    btn:{
        background:"#2c58e8",
        color:"white",
        fontSize:18,
        padding:"12px",
        borderRadius:"4px",
        margin:7,
        cursor:"pointer",
        width:100,
        height: 40,
        border: "none",
        '&:hover': {
            background: "#1d378f",
            // color: 'black'
         },
         textTransform:'none'
    },

    btn2:{
        textTransform:'none',
        background:"#05b34b",
        color:"white",
        fontSize:18,
        padding:"12px",
        borderRadius:"4px",
        height: 40,
        margin:7,
        cursor:"pointer",
        width:100,
        border: "none",
        '&:hover': {
            background: "#016e2d",
            // color: 'black'
         },

    },
    btn3:{
        background:"#e8290c",
        color:"white",
        padding:"12px",
        borderRadius:"4px",
        fontSize:18,
        cursor:"pointer",
        height: 40,
        margin:7,
        width:100,
        border: "none",
        '&:hover': {
            background: "#8c1806",
            // color: 'black'
         },

    },
    btnContainer:{
       display:"flex",
       justifyContent:"flex-start",
       
       width:"60%",
       padding:15,
       marginLeft:400,
       marginTop:20
    },
    optContainer:{
        marginLeft:90
    },
    radio:{
        // width:40
        position: "relative",
        left: -20,
        top: 55
    }
});

class Play extends Component {
    
    constructor(props){
        const questions=props.history.location.state.data;
        const sub=props.history.location.state.sub;
        console.log(questions,sub);
        super(props);
        this.state = {
            questions,
            sub,
            currentQuestion : {},
            nextQuestion: {},
            previousQuestion : {},
            answer: '',
            numberOfQuestions: 0,
            numberOfAnsweredQuestion: 0,
            currentQuestionIndex : 0,
            score: 0,
            correctAnswer : 0,
            wrongAnswer: 0,
            hints: 5,
            fiftyFifty : 2,
            nextButtonDisabled : false,
            previousButtonDisabled: true,
            usedFiftyFifty: false,
            time: {},
            checkedRadio: null
        };
        this.interval = null
    }

    componentDidMount(){
        const { questions, currentQuestion, nextQuestion, previousQuestion } = this.state;
        this.displayQuestions(questions,currentQuestion,nextQuestion, previousQuestion);
        this.startTimer();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    displayQuestions = (questions = this.state.questions, currentQuestion, nextQuestion, previousQuestion ) => {
        let { currentQuestionIndex } = this.state;
        if( !isEmpty(this.state.questions) ){
            questions = this.state.questions;
            currentQuestion = questions[currentQuestionIndex];
            nextQuestion = questions[currentQuestionIndex + 1];
            previousQuestion = questions[currentQuestionIndex - 1];
            const answer = currentQuestion.answer;
            this.setState({
                currentQuestion,
                nextQuestion,
                previousQuestion,
                numberOfQuestions:questions.length,
                answer
            }, () => {
                this.handleDisableButton();
            });
        }
    };

    handleNextButtonClick = (e) =>{
        if(this.state.nextQuestion !== undefined){
            this.setState(prevState=>({
                currentQuestionIndex:prevState.currentQuestionIndex + 1
            }),()=>{
                this.displayQuestions(this.state.state,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion)
            })
            this.setState({checkedRadio:false})
        }

        if(this.state.nextQuestion === undefined || this.state.currentQuestionIndex + 1 === this.state.numberOfQuestions){
            this.setState({
                nextButtonDisabled : true
            });
        }else {
            this.setState({
                nextButtonDisabled : false
            });
        }
    }

    handlePrevButtonClick = () =>{
        if(this.state.previousQuestion !== undefined){
            this.setState(prevState=>({
                currentQuestionIndex:prevState.currentQuestionIndex - 1
            }),()=>{
                this.displayQuestions(this.state.state,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion)
            })
        }


        if(this.state.previousQuestion === undefined || this.state.currentQuestionIndex === 0){
            this.setState({
                previousButtonDisabled : true
            });
        }else {
            this.setState({
                previousButtonDisabled : false
            });
        }
    }
    handleQuitButtonClick = () =>{
        if(window.confirm("Are you sure you want to submit?")){
            // this.props.history.push('/');
            this.endGame();
        }
    }

    handleOptionClick =(e)=>{
        console.log(e.target.value.toLowerCase() );
        console.log(this.state.answer.toLowerCase());
        if(e.target.value.toLowerCase() === this.state.answer.toLowerCase()){
            this.correctAnswer();
        }else{
            this.wrongAnswer();
        }
        
    }

    correctAnswer=()=>{
        console.log("Correct Answer");
        this.setState(prevState=>({
            score:prevState.score+1,
            correctAnswers:prevState.correctAnswers+1,
            // currentQuestionIndex:prevState.currentQuestionIndex+1,
            numberOfAnsweredQuestion:prevState.numberOfAnsweredQuestion+1
        }), () => {
            if (this.state.nextQuestion === undefined){
                this.endGame();
            }else{
            // this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
        }});
    }  

    wrongAnswer=()=>{
        // navigator.vibrate(1000);
        console.log("wrong Answer");
        this.setState(prevState=>({
            wrongAnswer:prevState.wrongAnswer + 1,
            // currentQuestionIndex:prevState.currentQuestionIndex+1,
            numberOfAnsweredQuestion:prevState.numberOfAnsweredQuestion
        }), () => {
            if (this.state.nextQuestion === undefined){
                this.endGame();
            }else{
            // this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
        }});
    } 
    
    startTimer = () => {
        const countDownTime = Date.now() + 1800000;
        this.interval = setInterval(() => {
            const now = new Date();
            const distance = countDownTime - now ;

            const minutes = Math.floor((distance % (1000 * 60 *60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(this.interval);
                this.setState({
                    time : {
                        minutes : 0,
                        seconds: 0
                    }
                }, () => {
                    this.endGame();
                });
            }else {
                this.setState({
                    time : {
                        minutes,
                        seconds
                    }
                });
            }

        }, 1000 );
    }

    handleDisableButton = () => {
        if(this.state.previousQuestion === undefined || this.state.currentQuestionIndex === 0){
            this.setState({
                previousButtonDisabled : true
            });
        }else {
            this.setState({
                previousButtonDisabled : false
            });
        }

        if(this.state.nextQuestion === undefined || this.state.currentQuestionIndex + 1 === this.state.numberOfQuestions){
            this.setState({
                nextButtonDisabled : true
            });
        }else {
            this.setState({
                nextButtonDisabled : false
            });
        }
    }

    endGame = () => {
        alert('Quiz has ended');
        const {state} = this;
        const playerStats = {
            score : state.score,
            numberOfQuestions: state.numberOfQuestions,
            numberOfAnsweredQuestion : state.numberOfAnsweredQuestion,
            correctAnswer: state.correctAnswer,
            wrongAnswer: state.wrongAnswer,
            sub: state.sub
        };
        console.log(playerStats);

        setTimeout(() => {
            this.props.history.push('/Summary', playerStats);
        }, 1000)
    }

    render() {
    const { classes } = this.props
    //  console.log(questions);
    const { 
        currentQuestion,
        currentQuestionIndex,
        numberOfQuestions,
        time
    } = this.state;
    // const history = useHistory();
    // const questions=history.location.state.data;
    // console.log(questions);
        return(
            <Fragment>
                <Helmet> <title>Exam Edge</title> </Helmet>
                <h2 className={classes.h2heading}>Exam Edge</h2>

                <div className={classes.questions}>
                    {/* <h2 className={classes.h2heading}>Exam Edge</h2> */}
                    <div>
                        <p>
                            <span className={classes.ofQuestion}>{currentQuestionIndex+1} of {numberOfQuestions}</span>
                            <span className={classes.lifeline}> {time.minutes} : {time.seconds} </span> <span className="mdi mdi-clock-outline mdi-24px"></span>
                        </p>
                    </div>
                    <h5 className={classes.heading}> {currentQuestion.question} </h5>
                    <div className={classes.optContainer}>
                        <div className={classes.opt} onChange={this.handleOptionClick}>
                        {/* <input type="radio" value={currentQuestion.option1} name="myGroupName"  className={classes.options}/> {currentQuestion.option3}
                            <input type="radio" value={currentQuestion.option2} name="myGroupName"  className={classes.options}/> {currentQuestion.option2}
                            <input type="radio" value={currentQuestion.option3} name="myGroupName"  className={classes.options}/> {currentQuestion.option1}
                            <input type="radio" value={currentQuestion.option4} name="myGroupName"  className={classes.options}/> {currentQuestion.option4}  */}

                            <FormControl>
                            {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                // defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value={currentQuestion.option1} control={<Radio />} label={currentQuestion.option1} />
                                <FormControlLabel value={currentQuestion.option2} control={<Radio />} label={currentQuestion.option2} />
                                <FormControlLabel value={currentQuestion.option3} control={<Radio />} label={currentQuestion.option3} />
                                <FormControlLabel value={currentQuestion.option4} control={<Radio />} label={currentQuestion.option4} />

                            </RadioGroup>
                            </FormControl>


                         {/* <input type="radio" name="myGroupName" value={currentQuestion.option1} onClick={this.handleOptionClick} className={classes.options}> {currentQuestion.option1} </input>
                        <div className={classes.options}>{currentQuestion.option1}</div>

                        <input type="radio" name="myGroupName" value={currentQuestion.option2} onClick={this.handleOptionClick} className={classes.options}> {currentQuestion.option2} </input>
                        <div className={classes.options}>{currentQuestion.option2}</div>
                    
                        <input type="radio" name="myGroupName" value={currentQuestion.option3} onClick={this.handleOptionClick} className={classes.options}> {currentQuestion.option3} </input>
                        <div className={classes.options}>{currentQuestion.option3}</div>

                        <input type="radio" name="myGroupName" value={currentQuestion.option3} onClick={this.handleOptionClick} className={classes.options}> {currentQuestion.option3} </input>
                        <div className={classes.options}>{currentQuestion.option4}</div> */} 
                        </div>
                    </div>
                        <div className={classes.btnContainer}>
                            {/* <Button 
                                // className = {classnames('btn', {'disable' : this.state.previousButtonDisabled})}
                                id="previous-button" 
                                onClick={this.handlePrevButtonClick} 
                                disabled={this.state.previousButtonDisabled}
                                className={classes.btn}
                            >
                                Previous
                            </Button> */}

                            <Button 
                                id="next-button" 
                                // className = {classNames('', {'disable' : this.state.nextButtonDisabled},classes.btn2)}
                                onClick={this.handleNextButtonClick} 
                                disabled={this.state.nextButtonDisabled}
                                className={classes.btn2}
                            >
                                Next
                            </Button>

                            <button 
                                id="quit-button" 
                                onClick={this.handleQuitButtonClick} 
                                className={classes.btn3}
                            >
                                Submit
                            </button>
                        </div>
                </div>
            </Fragment>
        );
    }
}


// export default Play;
export default withStyles(styles)(withRouter(Play));