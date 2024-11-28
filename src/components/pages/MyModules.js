import { useState } from "react";
import API from "../api/API";
import useLoad from "../api/useLoad";
import ModulePanels from "../entites/modules/ModulePanels";
import ToolTipDecorator from "../UI/ToolTipDecorator";
import { ActionTray,ActionAdd } from "../UI/Actions";
import ModuleForm from "../entites/modules/ModuleForm";

function MyModules() {
    // Initialisation -----------------------------------------------
    const loggedinUserID = 279;
    // const endpoint = `/modules/users/${loggedinUserID}`;
    const endpoint = `/modules`;

    // State --------------------------------------------------------
    const [ modules, , loadingMessage, loadModules ] = useLoad(endpoint)

    const [showNewModuleForm, setShowNewModuleForm] = useState(false);
    const [showJoinModuleForm, setShowJoinModuleForm] = useState(false);

    // Context ------------------------------------------------------
    // Methods ------------------------------------------------------
    const handleAdd = () => setShowNewModuleForm(true);
    const handleJoin = () => setShowJoinModuleForm(true);
    const handleDismissAdd = () => setShowNewModuleForm(false);
    const handleDismissJoin = () => setShowJoinModuleForm(false);

    const handleSubmit = async (module) => {
        const response = await API.post(endpoint, module);
        return response.isSuccess
            ? loadModules() || true
            : false;
    };

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

        {
            showNewModuleForm &&<p><ModuleForm onDismiss = {handleDismissAdd} onSubmit={handleSubmit}/></p>
        }
        {
            showJoinModuleForm &&<p>{"<JoinModuleForm />"}</p>
        }
        </section>
    )
}

export default MyModules;