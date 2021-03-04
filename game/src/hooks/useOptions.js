import { useState, useEffect } from "react";

export function useOptions() {
    const threeSymbols = [
        { name: 'rock', symbol: '👊' },
        { name: 'paper', symbol: '👋' },
        { name: 'scissors', symbol: '✌' }
    ]
    const fiveSymbols = [
        ...threeSymbols,
        { name: 'lizard', symbol: '🦎' },
        { name: 'spock', symbol: '🖖' }
    ]

    const [options, setOptions] = useState(threeSymbols);

    function chooseOptions(level) {
        level == 'game-classic' ? setOptions(threeSymbols) : setOptions(fiveSymbols);
    }


    return { options, chooseOptions };
} 