import { useState } from 'react';
import FormItem from '../../UI/Form';

const emptyModule = {
    ModuleName: "Dummy name",
    ModuleCode: "XYZ",
    ModuleLevel: 4,
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
        <form className="BorderedForm">
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

            <FormItem
                label="Module Code"
                htmlFor="ModuleCode"
                advice="Please enter the module code"
                error="Module code in not in valid format"
            >
                <input 
                type="text" 
                name="ModuleCode"
                value={module.ModuleCode}
            />
            </FormItem>
            
            <FormItem
                label="Module Level"
                htmlFor="ModuleLevel"
                advice="Choose a level between 3 and 7 inclusive"
                error="Invalid level - must be between 3 and 7 inclusive"
            >
                <select 
                name="ModuleLevel"
                value={module.ModuleLevel}
                >
                <option value="0" disabled>Select module level</option>
                {
                    [3,4,5,6,7].map((level) => <option key={level}>{level}</option>)
                }
            </select>
            </FormItem>

        </form>
    );

}