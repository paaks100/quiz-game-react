import { useState } from "react"
import "../App.css"
import { Questions } from "../Helpers/QuestionBank";

export const Quiz = () => {
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    return (
        <div className="Quiz">
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className="options">
                <button> {Questions[currQuestion].optionA} </button>
                <button> {Questions[currQuestion].optionB} </button>
                <button> {Questions[currQuestion].optionC} </button>
                <button> {Questions[currQuestion].optionD} </button>
            </div>
            <button> Next {">>>"}</button>
        </div>
    )
}