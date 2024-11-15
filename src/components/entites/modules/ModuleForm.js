import { useState } from 'react';
import FormItem from '../../UI/Form';

const emptyModule = {
    ModuleName: "",
    ModuleCode: "",
    ModuleLevel: 0,
    ModuleYearID: 0,
    ModuleLeaderID: 0,
    ModuleImageURL: "https://images.freeimages.com/images/small-previews/293/cable-4-1243085.jpg",
}

export default function ModuleForm({ initialmodule=emptyModule}){
    // Initialisation --------------------------------------------
    // State -----------------------------------------------------
    const [module, setModule] = useState(initialmodule);
    // Handlers --------------------------------------------------
    // View ------------------------------------------------------
    return(
        <form>
            <FormItem
                label="Module Name"
                htmlFor="ModuleName"
                advice="Please enter the name of the module"
                error="Your module name is too short"
            >
                <input 
                type="text" 
                name="ModuleName"
                value={module.ModuleName}
                />
            </FormItem> 

            <label htmlFor="ModuleName">Module Name</label>
            <p>Please enter the name of the module</p>
            <p>Module name is too short</p>

            <label htmlFor="ModuleCode">Module Code</label>
            <p>Please enter the module code</p>
            <input 
                type="text" 
                name="ModuleCode"
                value={module.ModuleCode}
            />
            <p>Module code in not in valid format</p>
            
            <label htmlFor="ModuleLevel">Module Level</label>
            <p>Choose a level between 3 and 7 inclusive</p>
            <select 
                name="ModuleLevel"
                value={module.ModuleLevel}
            >
                <option value="0" disabled>Select module level</option>
                {
                    [3,4,5,6,7].map((level) => <option key={level}>{level}</option>)
                }
            </select>
            <p>Invalid module level</p>
        </form>
    );

}