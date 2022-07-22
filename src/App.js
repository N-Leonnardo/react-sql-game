import {react,useState} from 'react'
import './App.css'
import './Modal.css'


function App() {

  const questionList = [
    {
      question: "Select all posts from user that has id = 1",
      table1: "user",
      table2: "posts",
      correctAnswer: "SELECT * FROM posts WHERE user_id = 1"
    },
    {
      question: "Select all posts from user that has id = 3",
      table1: "user",
      table2: "posts",
      correctAnswer: "SELECT * FROM posts WHERE user_id = 3"
    },
    {
      question: "Select all posts from user that has id = 5",
      table1: "user",
      table2: "posts",
      correctAnswer: "SELECT * FROM posts WHERE user_id = 5"
    }
  ]

  const [i, setI] = useState(0)

  const [question, setQuestion] = useState(questionList[i].question)
  const [answer, setAnswer] = useState("")
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)  

  const handleAnswer = ()=>{
    let answerstring = answer.toLowerCase().replace(/\s/g, '-');
    let correctAnswerFront = questionList[i].correctAnswer
    correctAnswerFront = correctAnswerFront.toLowerCase().replace(/\s/g, '-')
    console.log(correctAnswerFront)
    if(answerstring === correctAnswerFront){
      setIsCorrectAnswer(true);
      toggleModal();
    }
  }
  
  const handleQuestions = () => {
    console.log("handlequestion")
    setQuestion(questionList[i+1].question);
  }



// MODAL

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    if(modal){
      setI(i+1)
      handleQuestions()
      if(i === questionList.length){
        return(
          <h1>PARA BENS</h1>
        )
      }
    }
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


  return (
    <div className="App">
      <div className="question-container">

        <div className="display-image">
          <img src="" alt="" />
        </div>

        <div className="question-text">
          <p>Question</p>
          <div className="question-container-text">
            {question}
          </div>
        </div>
      </div>

      <div className="text-container">
        <div className="top-items">
          <div className="three-circles"> 
            <div className="red-circle"></div>
            <div className="yellow-circle"></div>
            <div className="green-circle"></div>
          </div>
          <div className="run-section">
            <button onClick={handleAnswer}> Run </button>
          </div>
        </div>
        <div className="answer-container-box">
          <textarea 
          placeholder='Type here...'
          className='answer-container' 
          type="text" onChange={(e)=> setAnswer(e.target.value)}/>
        </div>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}


    </div>
  );
}

export default App;
