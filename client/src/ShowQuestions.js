// //I should probably rename this at some point to maybe "quiz"
import React from 'React';
import axios from 'axios'

class ShowQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameWon: false,
      inputAnswer: '',
      random: this.props.questions[Math.floor(Math.random() * this.props.questions.length)]
    }
  }
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e, value) => {
    e.preventDefault();
    let inputAnswer = this.state.inputAnswer;
    let questions = this.props.questions;
    let countDown = this.state.countDown;
    let random = this.state.random;
    for (var i = 0; i < questions.length; i++) {
      if (inputAnswer === random.answer && questions[i].answer === random.answer) {
        console.log("you got it!")
        questions.splice(i, 1);
        console.log("new questions array", questions)
        this.setState({
          random: questions[Math.floor(Math.random() * this.props.questions.length)]
        })
        if(this.state.random.question == undefined && questions == undefined && !random.question || random == undefined){
          alert("You won!");
          this.setState({
            random: undefined,
            gameWon: !this.state.gameWon
          })
        }
      } else {
        console.log("keep going")
      }
    }
    this.setState({
      inputAnswer: ''
    })
  }
  //function that when each item in the array gets less than before, then render image
  showGirl = () =>{
    let questions = this.props.questions;
    
  }
  render() {
    return (
      <div>
        <h1>Begin Game</h1>
        <h2>Question:</h2>
        <form onSubmit={this.handleSubmit}>
          {this.state.random.question ? this.state.random.question : ""}
          <input type="text" name="inputAnswer" value={this.state.inputAnswer} onChange={this.handleInputChange} />
          <button type="button" onClick={this.handleSubmit}>submit</button>
        </form>
      </div>
    )
  }
}

export default ShowQuestions;

