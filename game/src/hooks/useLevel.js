import { useState, useEffect } from 'react';

export function useLevel() {

    const [level, setLevel] = useState('');

    useEffect(() => {
        const parsedLevel = localStorage.getItem("level") || 'game-classic';
        setLevel(parsedLevel)
    }, [])

    useEffect(() => {
        localStorage.setItem("level", level)
    }, [level]);

    return { level, setLevel };
}

