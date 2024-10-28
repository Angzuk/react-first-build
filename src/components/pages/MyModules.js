import { useState } from "react";

function MyModules() {
    // Initialisation -----------------------------------------------
    const loggedinUserID = 625;
    const endpoint = `/modules/users/${loggedinUserID}`;

    // State --------------------------------------------------------
    const [modules, setModules] = useState(null);
    const [loadingMessage, setLoadingMessage] = useState('Loading records ...');
    

    // Context ------------------------------------------------------
    // Methods ------------------------------------------------------
    // View ---------------------------------------------------------
    return (
        <h1>My Modules</h1>
    )
}

export default MyModules;