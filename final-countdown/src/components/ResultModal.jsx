import { useRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

export default function ResultModal({ ref, targetTime, timeRemaining, onRestart }) {

    const dialog = useRef();

    const userLose = timeRemaining <= 0;
    const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);
    const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })


    return createPortal(
        <dialog className="result-modal" ref={dialog} onClose={onReset}>
            {userLose && <h2>You Lose</h2>}
            {!userLose && <h2>Your Score: {score}</h2>}
            <p>The target time was <strong>{targetTime}</strong> seconds</p>
            <p>
                You stopped the timer with <strong>{formattedTimeRemaining}</strong> seconds left.
            </p>
            <p>
                <form method="dialog" onSubmit={onRestart}>
                    <button>Close</button>
                </form>
            </p>

        </dialog>,
        document.getElementById('modal')
    )
}