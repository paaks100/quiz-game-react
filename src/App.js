import { useState } from 'react';
import './App.css';
import { EndScreen } from './Components/EndScreen';
import { MainMenu } from './Components/MainMenu';
import { Quiz } from './Components/Quiz';
import { QuizContext } from './Helpers/Context';

function App() {
  const [gameState, setGameState] = useState("menu");

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{gameState, setGameState}}>
        {gameState == "menu" && <MainMenu/>}
        {gameState == "quiz" && <Quiz/>}
        {gameState == "endScreen" && <EndScreen/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
