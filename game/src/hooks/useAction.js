import { useState, useEffect } from "react";

export const useAction = () => {
    const [action, setAction] = useState('');
    return { action, setAction }
}