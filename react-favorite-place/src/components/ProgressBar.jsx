import { useEffect, useState } from "react";

const TIMER = 3000;

export default function ProgressBar() {
    const [timeRemaining, setTimeRemaining] = useState(TIMER)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(prev => prev - 10);
        }, 10);

        return () => {
            clearInterval(interval)
        }
    }, []);

    return <progress value={timeRemaining} max={TIMER}></progress>
}