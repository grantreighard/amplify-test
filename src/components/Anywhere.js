import React from 'react';
import { useMatch } from 'react-router-dom';

const Anywhere = () => {
    const match = useMatch(":route")
    return (
        <div>
            <h1>{match.pathname.split("/")[1]}</h1>
        </div>
    )
}

export default Anywhere;