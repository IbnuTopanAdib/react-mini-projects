import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../question.js';

const Summary = ({ userAnswers }) => {

    const skippedAnswers = userAnswers.filter((answer) => answer === null);
    const correctAnswers = userAnswers.filter(
        (answer, index) => answer === QUESTIONS[index].answers[0]
    );

    const skippedAnswersShare = Math.round(
        (skippedAnswers.length / userAnswers.length) * 100
    );
    const correctAnswersShare = Math.round(
        (correctAnswers.length / userAnswers.length) * 100
    );
    const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

    return (
        <div id="summary" >
            <img
                src={quizCompleteImg}
                alt="Trophy icon to celebrate quiz completion"
                className="summary-icon"
            />
            <h2 id="summary-title">Quiz Completed!</h2>
            <div id="summary-stats" className="stats-container">
                <div className="stat">
                    <span className="number">{skippedAnswersShare}%</span>
                    <span className="text">Skipped</span>
                </div>
                <div className="stat">
                    <span className="number">{correctAnswersShare}%</span>
                    <span className="text">Correct</span>
                </div>
                <div className="stat">
                    <span className="number">{wrongAnswersShare}%</span>
                    <span className="text">Incorrect</span>
                </div>
            </div>
            <ol className="answer-list">
                {userAnswers.map((answer, index) => {
                    let cssClass = 'user-answer';

                    if (answer === null) {
                        cssClass += ' skipped';
                    } else if (answer === QUESTIONS[index].answers[0]) {
                        cssClass += ' correct';
                    } else {
                        cssClass += ' wrong';
                    }

                    return (
                        <li key={index} className="answer-item">
                            <h3 className="question-number">Question {index + 1}</h3>
                            <p className="question-text">{QUESTIONS[index].text}</p>
                            <p className={cssClass}>{answer ?? 'Skipped'}</p>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}

export default Summary;