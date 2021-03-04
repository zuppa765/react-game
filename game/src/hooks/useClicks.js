import { useState, useEffect } from "react";

export const useClicks = () => {
    const [enabled, setEnabled] = useState(true);
    const toggleSounds = () => setEnabled(!enabled);

    return { toggleSounds, enabled };
};

