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
    const URL = 'https://localhost:5000/api';
    const endpointAddress = URL + endpoint;

    
    // View ---------------------------------------------------------
    return (
        <section>
        <   h1>My Modules</h1>
        {
            !modules 
            ? <p>{loadingMessage}</p>
            : modules.length === 0 
                ? <p>No modules found</p>
                : modules.map((module) => 
                    <p>{module.ModuleCode} {module.ModuleName}</p>
                )
        }
        </section>
    )
}

export default MyModules;