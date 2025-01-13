import { useState } from 'react'
import QUESTION from '../question.js';
import quizCompleteImg from '../assets/quiz-complete.png'

const Quiz = () => {

    const [userAnswer, setUserAnswer] = useState([]);
    const activeQuestionIndex = userAnswer.length;

    const isQuizCompleted = activeQuestionIndex === QUESTION.length;

    const handleUserAnswer = (answer) => {
        setUserAnswer((prevAnswer) => {
            return [...prevAnswer, answer]
        })
    }

    if (isQuizCompleted) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Trophy icon" />
                <h2>Quiz Completed!</h2>
            </div>
        )
    }

    const shuffledAnswer = [...QUESTION[activeQuestionIndex].answers];
    shuffledAnswer.sort(() => Math.random() - 0.5)


    return (
        <div id='quiz'>
            <div id="question">
                <h2>{QUESTION[activeQuestionIndex].text}</h2>
            </div>
            <ul id='answers'>
                {
                   shuffledAnswer.map((answer) => (
                        <li className="answer">
                            <button onClick={handleUserAnswer}>{answer}</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Quiz