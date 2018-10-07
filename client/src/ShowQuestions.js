// //I should probably rename this at some point to maybe "quiz"
import React from 'React';
import axios from 'axios'

class ShowQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameWon: false,
      inputAnswer: '',
      images: [],
      random: this.props.questions[Math.floor(Math.random() * this.props.questions.length)]
    }
  }
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  //create a function that will display the 4th element in array
  showImage = () =>{
    let images = this.state.images;
    let currentImage;
    for(var i = 0; i < images.length; i++){
      currentImage = images[images.length - 1].img
      return currentImage
    }
    return currentImage
  }
  handleSubmit = (e, value) => {
    e.preventDefault();
    let inputAnswer = this.state.inputAnswer;
    let questions = this.props.questions;
    let random = this.state.random;
    let gameWon = this.state.gameWon;
    let images = this.state.images;
    console.log(this.state.gameWon)
    for (var i = 0; i < questions.length; i++) {
      if (inputAnswer === random.answer && questions[i].answer === random.answer) {
        console.log("you got it!")
        questions.splice(i, 1);
        images.pop()
        this.setState({
          inputAnswer: '',
          random: questions[Math.floor(Math.random() * this.props.questions.length)],
          images: this.state.images
        })
        if(questions === undefined || questions.length == 0){
          console.log(gameWon)
          alert("You won!");
          this.setState({
            inputAnswer: '',
            random: undefined,
            gameWon: !this.state.gameWon
          })
          if(gameWon === true){
            console.log(this.state.gameWon)
            this.setState({
              inputAnswer: ""
            })
          }
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
  componentWillMount = () =>{
    let currentComponent = this;
    let questions = this.props.questions;
    let images = this.state.images;
    axios.get('/girl').then(function(response){
      currentComponent.setState({
        images: response.data
      })
    }).catch(function(err){
      console.log(err)
    })
  }
  render() {
    // console.log(this.state.gameWon)
    // let random = this.state.random
    return (
      <div>
        <h1>Begin Game</h1>
        <h2>Question:</h2>
        {this.state.random !== undefined ? this.state.random.question : this.state.random == undefined}
        <form onSubmit={this.handleSubmit}>
        <br/>
          <input type="text" name="inputAnswer" value={this.state.inputAnswer} onChange={this.handleInputChange} placeholder="answer"/>
          <button type="button" onClick={this.handleSubmit}>submit</button>
        </form>
        <img className="display-img" src={this.showImage()} />
      </div>
    )
  }
}

export default ShowQuestions;

