import { useState } from 'react'
import QUESTION from '../question.js'
import QuizTimer from './QuizTimer.jsx'
import Answer from './Answer.jsx'


const Question = ({ index, onSelectAnswer, onSkipAnswer }) => {

    const [answer, setAnswer] = useState({
        selectedAnswer: null,
        isCorrect: null
    });


    let timer = 10000;

    if (answer.selectedAnswer) {
        timer = 1000;
    }

    if (answer.isCorrect !== null) {
        timer = 2000;
    }

    function handleSelectAnswer(answer) {
        setAnswer({ selectedAnswer: answer, isCorrect: null })

        setTimeout(() => {

            setAnswer({ selectedAnswer: answer, isCorrect: answer === QUESTION[index].answers[0] })

            setTimeout(() => {
                onSelectAnswer(answer)
            }, 2000);
        }, 1000);
    }

    let answerStatus = '';

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerStatus = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answerStatus = 'answered'
    }
    console.log(answerStatus)

    return (
        <div id="question">
            <QuizTimer timeout={timer} onTimeout={onSkipAnswer} />
            <h2>{QUESTION[index].text}</h2>
            <Answer
                answers={QUESTION[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerStatus={answerStatus}
                onSelect={handleSelectAnswer}
            />
        </div>
    )
}

export default Question