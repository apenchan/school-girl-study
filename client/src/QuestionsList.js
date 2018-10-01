import React from 'react';
import axios from 'axios'

class QuestionsList extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      question: '',
      answer: ''
    }
  }
  handleChange = (e) =>{
    let name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.addQuestions(this.state)
    this.setState({
      question: "", answer: ""
    })
  }
  render(){
    return(
      <form>
        <input type="text" name="question" value={this.state.question} onChange={this.handleChange} placeholder="Question"/>
        <input type="text" name="answer" value={this.state.answer} onChange={this.handleChange} placeholder="Answer"/>
        <button onClick={this.handleSubmit} disabled={this.props.questions.length >4}>Submit</button>
      </form>
    )
  }
}

export default QuestionsList;