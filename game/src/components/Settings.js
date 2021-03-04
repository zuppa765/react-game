import { React, useEffect, useState } from "react";
import { useMusic } from '../hooks/useMusic';
import { useKeys } from '../hooks/useKeys';

import back from '../sounds/back.mp3';

export const Settings = ({ toggleSounds, enabled, play }) => {

    const [playing, toggle] = useMusic(back);

    const onKeypress = e => {
        if (e.ctrlKey && e.code === 'KeyM')
            toggle();
        if (e.ctrlKey && e.code === 'KeyS')
            toggleSounds();
        if (!enabled) play({ id: 'cl2' })
    }
    useKeys(onKeypress);
    const [style, setStyle] = useState({ display: 'none' });

    return (
        <div className="settings icon">

            <span onMouseOver={() => setStyle({ display: 'block' })}
                onMouseOut={() => setStyle({ display: 'none' })}>
                &#10067;
            </span>

            <p className="info-buttons" style={style}>
                <i>This is my first ever React:)</i><br /><br />
                <b>Hot keys:</b><br />
                Music: ctr+M;<br />
                Mute: ctr+S;<br />
                Level: ctr+C/ctr+H
            </p>
            <span onClick={() => { toggleSounds(); if (!enabled) play({ id: 'cl2' }) }}> {enabled ? '🔈' : '🔇'}</span>
            <span onClick={toggle}> {playing ? '🔔' : '🔕'} </span>
            <span>&#129351;</span>
        </div >
    )
}