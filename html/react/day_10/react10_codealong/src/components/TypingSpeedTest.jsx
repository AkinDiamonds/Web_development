import { useState, useRef, useEffect } from "react";
import './TypingSpeedTest.css';

function TypingSpeedTest() {
    const [started, setStarted] = useState(false);
    const [finished, setFinished] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState()
    const [userInput, setUserInput] = useState('');

    const inputRef = useRef(null);
    const timerRef = useRef(null);
    const startTimeRef = useRef(null);

    const sampleText = 'Lagos is the largest city in Nigeria and one of the fastest-growing cities in the world. It serves as the economic hub of the country.';

    // Focus input when started becomes true
    useEffect(() => {
        if (started && inputRef.current) {
            inputRef.current.focus()
        }
    }, [started]);

    function startTest() {
        setStarted(true);
        setFinished(false);
        setUserInput('');
        setTimeElapsed(0);
        startTimeRef.current = Date.now();

        // Start timer
        timerRef.current = setInterval(() => {
            setTimeElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000));

        }, 1000)
    }

    function handleInputChange(e) {
        const value = e.target.value;
        setUserInput(value);

        // Check if user completed typing
        if (value === sampleText) {
            finishTest();
        }
    }

    function finishTest() {
        setFinished(true);
        setStarted(false);
        clearInterval(timerRef.current)
        timerRef.current = null;
    }

    function resetTest() {
        setStarted(false);
        setFinished(false);
        setUserInput('');
        setTimeElapsed(0);
        clearInterval(timerRef.current);
        timerRef.current = null;
    }

    // Calculate statistics

    const wordsTyped = userInput.trim().split(/\s+/).filter(word => word.length>0)
}