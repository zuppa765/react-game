import { React } from "react";
import rs from '../images/rs.png';

export const Footer = ({ enabled, play }) => {
    return (
        <>
            <footer className="footer">
                <a rel="noopener noreferrer nofollow" target="_blank" href="https://github.com/ya-stefaniya">@ya-stefaniya, 2021 /</a>
                <a rel="noopener noreferrer nofollow" target="_blank" href="https://rs.school/js/"
                />
                <img src={rs} />
            </footer>
        </>

    );
}

//sound ? '🔈' :