
import { useState, useRef } from "react"
import ResultModal from "./ResultModal";

export default function ({ title, targetTime }) {
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timer = useRef();
    const dialog = useRef();

    const timeActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleTimeRemaining() {
        setTimeRemaining(targetTime * 1000);
     }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining((prevTimeRemaining) => {
                prevTimeRemaining -= 10;
                return prevTimeRemaining;
            });
        }, 10);
    }

    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open();
    }


    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} timeRemaining = {timeRemaining} onRestart = {handleTimeRemaining} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">{targetTime} second{targetTime > 1 ? 's' : ''}</p>

                <p>
                    <button onClick={timeActive ? handleStop : handleStart}>
                        {timeActive ? "Stop" : "Start Challenge"}
                    </button>
                </p>
                <p className={timeActive ? "active" : undefined}>
                    {timeActive ? "Time is running " : "Timer inactive"}
                </p>
            </section>
        </>
    )
}