import { useState, useEffect } from "react";

function MyModules() {
    // Initialisation -----------------------------------------------
    const loggedinUserID = 279;
    const endpoint = `/modules/users/${loggedinUserID}`;

    // State --------------------------------------------------------
    const [modules, setModules] = useState(null);
    const [loadingMessage, setLoadingMessage] = useState('Loading records ...');


    // Context ------------------------------------------------------
    // Methods ------------------------------------------------------
    const apiCall = async (endpoint) => {
    const URL = 'https://softwarehub.uk/unibase/api';
    const endpointAddress = URL + endpoint;
    const response = await fetch(endpointAddress);
    const result = await response.json();
    console.log(JSON.stringify(response));
    setModules(result);
    }
    useEffect(() => { apiCall(endpoint) }, [endpoint]);
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