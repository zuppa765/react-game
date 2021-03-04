import { React, useState, useEffect } from "react";
import { Settings } from './Settings'
import { Link } from 'react-router-dom';

export const Header = ({ toggleSounds, enabled, play }) => {
    return (
        <>
            <header>
                <div>
                    <Link to='/' onClick={() => play({ id: 'cl2' })}>
                        <div className="logo">
                            <div className="icon">&#127918;</div>
                            <h1 className="header">Rock & Paper & Scissors</h1>
                        </div>
                    </Link>
                </div>
                <Settings toggleSounds={toggleSounds}
                    enabled={enabled}
                    play={play} />
            </header>
        </>

    );
}
