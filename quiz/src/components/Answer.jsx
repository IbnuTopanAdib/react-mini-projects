import { useRef } from 'react'

const Answer = ({ answers, selectedAnswer, answerStatus, onSelect }) => {

    const shuffledUserAnswer = useRef();

    if (!shuffledUserAnswer.current) {
        shuffledUserAnswer.current = [...answers];
        shuffledUserAnswer.current.sort(() => Math.random() - 0.5)
    }
    return (
        <ul id='answers'>
            {
                shuffledUserAnswer.current.map((answer) => {
                    const isSelected = selectedAnswer === answer;
                    let cssClass = '';

                    if (answerStatus === 'answered' && isSelected) {
                        cssClass = 'selected';
                    }

                    if (
                        (answerStatus === 'correct' || answerStatus === 'wrong') &&
                        isSelected
                    ) {
                        cssClass = answerStatus;
                    }

                    return (
                        <li key={answer} className="answer">
                            <button
                                onClick={() => onSelect(answer)}
                                className={cssClass}
                                disabled = {answerStatus !== ''}
                            >
                                {answer}
                            </button>
                        </li>
                    );
                }
                )
            }
        </ul>
    )
}

export default Answer