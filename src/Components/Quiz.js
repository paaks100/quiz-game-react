import { useContext, useState } from "react"
import "../App.css"
import { QuizContext } from "../Helpers/Context";
import { Questions } from "../Helpers/QuestionBank";

export const Quiz = () => {
    const {score, setScore, setGameState} = useContext(QuizContext)
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const nextQuestion = () => {
        //increase score by 1 if option chosen = answer
        (Questions[currQuestion].answer == optionChosen) && setScore(score+1);
        //go to next question
        setCurrQuestion(currQuestion+1)
    }

    const finishQuiz = () => {
        //increase score by 1 if option chosen = answer
        (Questions[currQuestion].answer == optionChosen) && setScore(score+1);
        //go to endScreen
        setGameState("endScreen")
    }

    return (
        <div className="Quiz">
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className="options">
                <button onClick={() => setOptionChosen("A")}> {Questions[currQuestion].optionA} </button>
                <button onClick={() => setOptionChosen("B")}> {Questions[currQuestion].optionB} </button>
                <button onClick={() => setOptionChosen("C")}> {Questions[currQuestion].optionC} </button>
                <button onClick={() => setOptionChosen("D")}> {Questions[currQuestion].optionD} </button>
            </div>

            {/* if you're on the last question, finish quiz button
            otherwise Next >>> button */}
            {currQuestion == Questions.length-1
                ? <button onClick={finishQuiz}> Finish Quiz</button>
                : <button onClick={nextQuestion}> Next {">>>"}</button>
            }
            
        </div>
    )
}