import { useState } from 'react'
import QUESTION from '../question.js';

const Quiz = () => {

    const [userAnswer, setUserAnswer] = useState([]);
    const activeQuestionIndex = userAnswer.length;

    const handleUserAnswer = (answer) => {
        setUserAnswer((prevAnswer) => {
            return [...prevAnswer, answer]
        })
    }


    return (
        <div id='quiz'>
            <div id="question">
                <h2>{ QUESTION[activeQuestionIndex].text }</h2>
            </div>
            <ul id='answers'>
                {
                    QUESTION[activeQuestionIndex].answers.map((answer) => (
                        <li className="answer">
                            <button onClick={handleUserAnswer}>{ answer }</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Quiz