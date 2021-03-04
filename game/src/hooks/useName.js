import { useState, useEffect } from "react";



export const useName = () => {
    const [name, setName] = useState('Your name');

    const handleChange = (e) => {
        setName(e.target.value);
        localStorage.setItem("name", e.target.value);
    }
    useEffect(() => {
        setName(localStorage.getItem("name"));
    }, []);

    return { name, handleChange };
};
