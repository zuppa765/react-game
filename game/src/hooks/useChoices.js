import { useState, useEffect } from "react";

export function useChoices() {
    const [humanChoice, setHumanChoice] = useState();
    const [compChoice, setCompChoice] = useState();

    // useEffect(() => {
    //     const parsedHumanChoice = localStorage.getItem("humanChoice");
    //     setHumanChoice(parsedHumanChoice);
    // }, []);
    // useEffect(() => {
    //     localStorage.setItem("humanChoice", humanChoice);
    // }, [humanChoice]);

    // useEffect(() => {
    //     const parsedCompChoice = localStorage.getItem("compChoice");
    //     setCompChoice(parsedCompChoice);
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem("compChoice", compChoice);
    // }, [compChoice]);

    return { humanChoice, setHumanChoice, compChoice, setCompChoice };
} 