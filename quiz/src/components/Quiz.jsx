import { useState, useCallback } from 'react'
import QUESTION from '../question.js';
import quizCompleteImg from '../assets/quiz-complete.png'
import Question from './Question.jsx';
import Summary from './Summary.jsx';


const Quiz = () => {

    const [userAnswer, setUserAnswer] = useState([]);
    const activeQuestionIndex = userAnswer.length ;

    const isQuizCompleted = activeQuestionIndex === QUESTION.length;


    const handleUserAnswer = useCallback(function handleUserAnswer(answer) {
        setUserAnswer((prevAnswer) => {
            return [...prevAnswer, answer];
        });
    }, [activeQuestionIndex])

    const handleSkipAnswer = useCallback(() => handleUserAnswer(null), [handleUserAnswer]);

    if (isQuizCompleted) {
        return (
           <Summary userAnswers={userAnswer}/>
        )
    }




    return (
        <div id='quiz'>
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleUserAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}

export default Quiz