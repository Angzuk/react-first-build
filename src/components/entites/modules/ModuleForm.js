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
    const isValid = {
        ModuleName: (name) => name.length>8,
        ModuleCode: (code) => /^\D{2}\d{4}$/.test(code),
        ModuleLevel: (level) => (level > 2) && (level < 8),
        ModuleYearID: (id) => true,
        ModuleLeaderID: (id) => true,
        ModuleImageURL: (url) => /^(http|https):\/\/(([a-zA-Z0-9$\-_.+!*'(),;:&=]|%[0-9a-fA-F]{2})+@)?(((25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])(\.(25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])){3})|localhost|([a-zA-Z0-9\-\u00C0-\u017F]+\.)+([a-zA-Z]{2,}))(:[0-9]+)?(\/(([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*(\/([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*)*)?(\?([a-zA-Z0-9$\-_.+!*'(),;:@&=/?]|%[0-9a-fA-F]{2})*)?(#([a-zA-Z0-9$\-_.+!*'(),;:@&=/?]|%[0-9a-fA-F]{2})*)?)?$/.test(url)    }

    const errorMessage = {
        ModuleName: "Module name is too short",
        ModuleCode: "Module is not in a valid format",
        ModuleLevel: "Invalid module level",
        ModuleYearID: "No delivery year has been selected",
        ModuleLeaderID: "No module leader has been selected",
        ModuleImageURL: "Image URL is not a valid URL string"
    }


    // State -----------------------------------------------------
    const [module, setModule] = useState(initialmodule);
    const [errors, setErrors] = useState(
        Object.keys(initialmodule).reduce(
            ((accum, key) => ({...accum, [key]: null})),{})
    );

    // Handlers --------------------------------------------------
    const handleChange= (event) => {
        const { name, value } = event.target;
        const newValue = (name === "ModuleLevel") ? parseInt(value) : value;
        setModule({...module, [name]: newValue});
    };

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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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