import React from 'react';
import QuestionsList from './QuestionsList';
import ShowQuestions from './ShowQuestions';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    }
  }
  addQuestions = (questionAndAnswer) =>{
    let questions = this.state.questions
     this.setState({
       questions: this.state.questions.concat(questionAndAnswer)
     })
  }
  //needs to be while statement
  handleQuestionLimit = (question) =>{
    let counter = this.state.counter;
    let questions = this.state.questions;
      // for (var prop in questions) {
      //   console.log(questions[prop]);
      //   console.log(questions[prop].question)
      // }
  }
  render(){
    // console.log("I am the question state",this.state.questions)
    return(
      <div className="questions-container">
        {this.state.questions.length < 5 ? <QuestionsList questions={this.state.questions} addQuestions={this.addQuestions}/> : <ShowQuestions questions={this.state.questions}/>}
      </div>
    )
  }
}

export default Questions;