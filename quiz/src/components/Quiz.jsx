import { useState } from 'react'

const Quiz = () => {

    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState([]);
    return (
        <div>Quiz</div>
    )
}

export default Quiz