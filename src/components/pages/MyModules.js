import { useState, useEffect } from "react";
import API from "../api/API";
import ModulePanels from "../entites/modules/ModulePanels";
import ToolTipDecorator from "../UI/ToolTipDecorator";
import { ActionTray,ActionAdd } from "../UI/Actions";

function MyModules() {
    // Initialisation -----------------------------------------------
    const loggedinUserID = 279;
    const endpoint = `/modules/users/${loggedinUserID}`;

    // State --------------------------------------------------------
    const [modules, setModules] = useState(null);
    const [loadingMessage, setLoadingMessage] = useState('Loading records ...');

    const [showNewModuleForm, setShowNewModuleForm] = useState(false);
    const [showJoinModuleForm, setShowJoinModuleForm] = useState(false);

    // Context ------------------------------------------------------
    // Methods ------------------------------------------------------
    const apiCall = async (endpoint) => {
        const response = await API.get(endpoint);
        response.isSuccess
            ? setModules(response.result)
            : setLoadingMessage(response.message)
    };

    useEffect(()=> {apiCall(endpoint)}, [endpoint]);

    const handleAdd = () => setShowNewModuleForm(true);
    const handleJoin = () => setShowJoinModuleForm(true);

    // View ---------------------------------------------------------
    return (
        <section>
        <   h1>My Modules</h1>
        {
            !modules 
            ? <p>{loadingMessage}</p>
            : modules.length === 0 
                ? <p>No modules found</p>
                : <ModulePanels modules={modules} />
                    
        }
        <ActionTray>
            <ToolTipDecorator message="Add new module">
                <ActionAdd showText onClick={handleAdd} buttonText="Add new module"/>
            </ToolTipDecorator>
            <ToolTipDecorator message="Join a module">
                <ActionAdd showText onClick={handleJoin} buttonText="Join a module"/>
            </ToolTipDecorator>
        </ActionTray>
        </section>
    )
}

export default MyModules;