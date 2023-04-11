import React, { Component, Fragment } from "react";
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import correct from '../images/correct.png';
import axios from "axios"

const styles = theme => ({
    component:{
        left: 300,
        top:'80px',
        margin: '10px',
        // position:'relative'
    },
    heading:{
        color:"green",
        fontSize:'2.5rem',
        fontWeight:600,
        position:'absolute',
        top:50,
        left: 470,
        textAlign:'center',
        fontFamily:['square-peg','cursive']
    },
    image:{
        position:'absolute',
        // top: -60,
        left: 600,
        paddingBottom: '20px'
    },
    container:{
        background:'#e4e7ed',
        width:600,
        height:350,
        padding:25,
        borderRadius: 10,
        position:'absolute',
        top:150,
        left:300    
    },
    head:{
        position:'relative',
        textAlign:'center',
        fontSize:'1.7rem',
        fontWeight:400
    },
    head2:{
        position:'relative',
        textAlign:'center',
        fontSize:'1.7rem',
        fontWeight:600,
        color:'blue',
        top:-10
    },
    score:{
        textAlign:'center',
        fontSize:'1.2rem',
        margin:15
    },
    btn:{
        position:'absolute',
        top:580,
        left: 550,
        marginBottom: 200,
        textDecoration:'none',
        listStyleType: "none",
        background:'black',
        color:'white',
        borderRadius:4,
        padding:10,
        '&:hover': {
            background: "#e4e7ed",
            color: 'black'
         },
    },
    button:{
        marginTop:25,
        textAlign:'center'
    }
})
class QuizSummary extends Component{
    constructor(props) {
        const sub=props.history.location.state.sub;
        console.log(sub);
        super(props);
        this.state = {
            score : 0,
            sub,
            numberOfQuestions: 0,
            numberOfAnsweredQuestion : 0,
            correctAnswer : 0,
            wrongAnswer: 0
        };
    }
    componentDidMount(){
        const {state} = this.props.location;
        this.setState({
            score : (state.score / state.numberOfQuestions) * 100,
            numberOfQuestions: state.numberOfQuestions,
            numberOfAnsweredQuestion : state.numberOfAnsweredQuestion,
            correctAnswer : state.correctAnswer,
            wrongAnswer: state.wrongAnswer
        });
    }

    Back=async(userScore)=>{
        if(userScore <= 3){
            alert("You are unable to get minimum score. Better luck next time! ");
            localStorage.removeItem('student');
            localStorage.removeItem('Os');
            localStorage.removeItem('Cn');
            localStorage.removeItem('Ds');
            localStorage.removeItem('To');
            localStorage.removeItem('Dm');
            this.props.history.push('/');
        }else{
        const {state} = this;
        const URL = "http://localhost:8000/api"
            try {
                const cr=state.numberOfAnsweredQuestion;
                const sub = state.sub;
                const myArray = sub.split(" ");
                const word1 = myArray[0][0];
                const word2 = myArray[1][0];
                const str = word2.toLowerCase();
                const final = word1+str;
                console.log(final);
                console.log(cr);
                localStorage.setItem(final, cr);
            } catch (err) {
                console.log(err);
            }
            this.props.history.push('/ExamPage',state.sub)
        }
    }

    render() {
    const { classes } = this.props

        // console.log(this.props.location.state);

        const {state} = this.props.location;

        let stats,remark;

        const userScore=this.state.score;


        if(userScore<=30){
            remark='You need more practice!';
        }else if(userScore>30 && userScore<=50){
            remark='Better luck next time';
        }
        else if(userScore<=70 && userScore>50){
            remark='You can do better';
        }
        else if(userScore>=71 && userScore<=84){
            remark='You did great!';
        }
        else{
            remark='You\'re an absolute genius!';
        }
        if(state !== undefined){
            stats=(
                <Fragment>
                    <div className={classes.component}>
                    <div>
                    <img src={correct} alt="" className={classes.image}/>
                    </div>
                    <h1 className={classes.heading}>Quiz has ended</h1>
                    <div className={classes.container}>
                        <h4 className={classes.head}>{remark}</h4>
                        <h2 className={classes.head2}>Your Score:{this.state.score.toFixed(0)}&#37;</h2>
                    <div className={classes.score}>
                       <span className={classes.stat}>Total number of questions: </span>
                        <span className={classes.right}> {this.state.numberOfQuestions} </span>
                    </div>    
                    <div className={classes.score}>
                        <span className={classes.stat}>Number of answered questions: </span>
                        <span className={classes.right}> {this.state.numberOfAnsweredQuestion + this.state.wrongAnswer } </span>
                    </div>
                        <div className={classes.score}>    
                        <span className={classes.stat}>Number of Correct answer: </span>
                        <span className={classes.right}> {this.state.numberOfAnsweredQuestion} </span>
                        </div>
                    <div className={classes.score}>
                        <span className={classes.stat}>Number of Wrong Answer: </span>
                        <span className={classes.right}> {this.state.wrongAnswer} </span>
                       </div>
                    </div>
                    <section className={classes.button}>
                        {/* <ul> */}
                            {/* <li> */}
                                <Link className={classes.btn}  onClick={()=>this.Back(userScore)}>Back to Home</Link>
                            {/* </li> */}
                        {/* </ul> */}
                    </section>
                    </div>
                </Fragment>
            );
        }else{
            stats=(
                <section>
                    <div className={classes.component}>

                    <h1 className={classes.noStats}> No Statistics Available</h1>
                <ul>
                            <li>
                                <Link className={classes.btn} onClick={this.Back}>Back to Home</Link>
                            </li>
                </ul>
                </div>
                </section>
            );
        }
        return(
            <Fragment>
                <Helmet> <title>ExamEdge - Result</title> </Helmet>
                {stats}
            </Fragment>
        );
    }
}
export default withStyles(styles)(QuizSummary);
