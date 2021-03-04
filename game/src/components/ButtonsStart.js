import { React, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { InfoHard } from './InfoHard';
import { useKeys } from '../hooks/useKeys';


export const ButtonsStart = ({ level, setLevel, options, chooseOptions, enabled, setHumanChoice, compChoice, setCompChoice, play, name, handleChange }) => {

    const reload = () => {
        setCompChoice();
        setHumanChoice();
    }

    //key control of the level
    const onKeypress = e => {
        if (e.code === 'KeyC') {
            setLevel('');
            setLevel('game-classic');
        }
        else if (e.code === 'KeyH') {
            setLevel('');
            setLevel('game-hard');
        }
    }
    useKeys(onKeypress);

    return (
        <main className="buttons-start">
            <section className='main-screen'>
                <input type="text" className="name-input" placeholder="Your name"
                    value={name} onChange={handleChange}></input>
                <div className="start-options">
                    <div className="start-easy">
                        <div className="button-icons">
                            <span>&#128074;</span>
                            <span>&#128075;</span>
                            <span>&#9996;</span>
                        </div>
                        <Link to='/game-classic' level={level} options={options} name={name}>
                            <div>
                                <button className="start"
                                    onClick={() => {
                                        setLevel('game-classic');
                                        chooseOptions('game-classic');
                                        if (enabled) play({ id: 'cl2' });
                                        if (compChoice) reload();
                                    }}>start</button>
                            </div>
                        </Link>
                    </div>
                    <div className="start-hard" >
                        <Link to='/game-hard'>
                            <div>
                                <button className="start hard"
                                    onClick={() => {
                                        setLevel('game-hard');
                                        chooseOptions('game-hard');
                                        if (enabled) play({ id: 'cl2' });
                                        if (compChoice) reload();
                                    }}
                                >start</button>
                            </div>
                        </Link>
                        <InfoHard onClick={() => { if (enabled) play(); }} />
                        <div className="button-icons">
                            <span>&#128074;</span>
                            <span>&#128075;</span>
                            <span>&#9996;</span>
                            <span>&#129422;</span>
                            <span>&#128406;</span>
                        </div>
                    </div>

                </div>
            </section>
        </main >)
};