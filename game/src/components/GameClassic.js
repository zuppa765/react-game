import { React, useState, useEffect } from "react";
import { HumanPick } from './HumanPick';
import { Result } from './Result';
import { useAction } from '../hooks/useAction';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useKeys } from '../hooks/useKeys';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export const GameClassic = ({ level, setLevel, options,
    humanChoice, setHumanChoice, compChoice, setCompChoice,
    humanScore, setHumanScore, compScore, setCompScore,
    outcome, setOutcome,
    enabled, play, name }) => {

    const actions = useAction('no-action');
    const screen1 = useFullScreenHandle();
    const reload = () => {
        setCompChoice();
        setHumanChoice();
    }
    const onKeypress = e => {
        if (e.ctrlKey && e.code === 'KeyC') {
            setLevel('');
            setLevel('game-classic');
        }
        else if (e.ctrlKey && e.code === 'KeyH') {
            setLevel('');
            setLevel('game-hard');
        }
        if (compChoice) reload();
        if (enabled) play({ id: 'cl1' });
    }
    useKeys(onKeypress);

    return (
        <Router>
            <>
                <FullScreen handle={screen1}>
                    <h1>{level == 'game-classic' ? 'Classic Game' : 'Special Mode'}</h1>
                    <span className="full-screen" onClick={screen1.active ? screen1.exit : screen1.enter}>&#129498;</span>
                    <Link to='/'>
                        <button className='back' onClick={() => {
                            if (enabled) play({ id: 'cl1' });
                            if (compChoice) reload();
                            { level == 'game-classic' ? setLevel('game-hard') : setLevel('game-classic') }
                        }}>
                            change level</button>
                    </Link>
                    <section>
                        <div className="container">
                            <div className="players">
                                <div className="result-header">
                                    <h3>{name ? name : 'You'}</h3>
                                    <span>{humanScore}</span>
                                </div>

                                <div className="result-header">
                                    <span>{compScore}</span>
                                    <h3>Opponent</h3>
                                </div>

                            </div>
                            {!compChoice && <HumanPick humanChoice={humanChoice} setHumanChoice={setHumanChoice} compChoice={compChoice} setCompChoice={setCompChoice} level={level}
                                options={options} enabled={enabled} play={play} />}
                            <Route path="/result">
                                <Result humanChoice={humanChoice} setHumanChoice={setHumanChoice} compChoice={compChoice} setCompChoice={setCompChoice}
                                    options={options} outcome={outcome} setOutcome={setOutcome}
                                    compScore={compScore} setCompScore={setCompScore}
                                    humanScore={humanScore} setHumanScore={setHumanScore} enabled={enabled}
                                    {...actions} play={play}
                                />
                            </Route>

                        </div>
                    </section>
                </FullScreen>
            </>
        </Router >
    )

};

