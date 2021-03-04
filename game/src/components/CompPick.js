
import { React, useState, useEffect } from "react";


export const CompPick = ({ compChoice, humanChoice, outcome, counter }) => {

    return (
        <>
            {humanChoice && <div className={`comp-choice ${outcome == 'lose' && counter == 0 ? 'winner' : ''}`}>
                <span>{compChoice && compChoice.name}</span>
                <div className='answer'>
                    {compChoice && compChoice.symbol}
                </div>
            </div>
            }
        </>
    )
};

