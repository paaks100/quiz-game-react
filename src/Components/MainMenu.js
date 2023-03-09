import { useContext } from "react"
import "../App.css"
import { QuizContext } from "../Helpers/Context"

export const MainMenu = () => {
    const {gameState, setGameState} = useContext(QuizContext)
    return (
        <div className="Menu">
            <button onClick={() => setGameState("quiz")}>Start Quiz</button>
        </div>
    )
}