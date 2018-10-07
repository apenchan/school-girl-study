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
  render(){
    return(
      <div className="questions-container">
        {this.state.questions.length < 5 ? <QuestionsList questions={this.state.questions} addQuestions={this.addQuestions}/> : <ShowQuestions questions={this.state.questions}/>}
      </div>
    )
  }
}

export default Questions;