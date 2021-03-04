

import { useState, useEffect } from "react";

export function useOutcome() {
    const [humanScore, setHumanScore] = useState(0);
    const [compScore, setCompScore] = useState(0);
    const [outcome, setOutcome] = useState('');

    useEffect(() => {
        const parsedHumanScore = Number(localStorage.getItem("humanScore") || 0);
        setHumanScore(parsedHumanScore)
    }, [])
    useEffect(() => {
        const parsedCompScore = Number(localStorage.getItem("compScore") || 0);
        setCompScore(parsedCompScore)
    }, [])

    useEffect(() => {
        localStorage.setItem("humanScore", humanScore)
    }, [humanScore]);

    useEffect(() => {
        localStorage.setItem("compScore", compScore)
    }, [compScore]);

    return { humanScore, setHumanScore, compScore, setCompScore, outcome, setOutcome };
} 