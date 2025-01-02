
import { useState, useRef } from "react"

export default function ({ title, targetTime }) {
    const timer = useRef();
    const [timeExpired, setTimeExpired] = useState(false);
    const [timeStarted, setTimeStarted] = useState(false);

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimeExpired(true)
        }, targetTime * 1000);

        setTimeStarted(true);
    }

    function handleStop() {
        clearTimeout(timer.current);
    }


    return (
        <section className="challenge">
            <h2>{title}</h2>
            <p>{ timeExpired && "You Lose"}</p>
            <p className="challenge-time">{targetTime} second{targetTime > 1 ? 's' : ''}</p>

            <p>
                <button onClick={timeStarted ? handleStop : handleStart}>
                    {timeStarted ? "Stop" : "Start Challenge"}
                </button>
            </p>
            <p className={timeStarted ? "active" : undefined}>
                { timeStarted ? "Time is running " : "Timer inactive"}
            </p>
        </section>
    )
}