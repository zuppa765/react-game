import { useEffect } from "react";

export const useKeys = (action) => {

    useEffect(() => {
        document.addEventListener('keypress', action);
        return () => {
            document.removeEventListener('keypress', action);
        };
    }, [action]);
}