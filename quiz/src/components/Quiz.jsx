import { useState, useCallback } from 'react'
import QUESTION from '../question.js';
import quizCompleteImg from '../assets/quiz-complete.png'
import QuizTimer from './QuizTimer.jsx';

const Quiz = () => {

    const [userAnswer, setUserAnswer] = useState([]);
    const activeQuestionIndex = userAnswer.length;

    const isQuizCompleted = activeQuestionIndex === QUESTION.length;

    const handleUserAnswer = useCallback(function handleUserAnswer(answer) {
        setUserAnswer((prevAnswer) => {
            return [...prevAnswer, answer]
        })
    }, [])

    const handleSkipAnswer = useCallback(() => handleUserAnswer(null), [handleUserAnswer]);

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
                <QuizTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer} />
                <h2>{QUESTION[activeQuestionIndex].text}</h2>
                <ul id='answers'>
                    {
                        shuffledAnswer.map((answer) => (
                            <li className="answer" key={answer}>
                                <button onClick={handleUserAnswer}>{answer}</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Quiz