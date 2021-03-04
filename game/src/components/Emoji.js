import React from 'react';

export const Emoji = ({ id, label, symbol, setHumanChoice, enabled, play }) => {



    return (
        <span
            className='emoji'
            role="img"
            id={id}
            aria-label={label ? label : ""}
            aria-hidden={label ? "false" : "true"}
            onClick={(e) => {
                setHumanChoice(e.target.id);
                if (enabled) play({ id: 'cl2' });
            }
            }
        >
            {symbol}
        </span>
    );
}



