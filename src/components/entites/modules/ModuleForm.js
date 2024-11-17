import { useState, useEffect } from 'react';
import API from '../../api/API';
import { ActionTray, ActionAdd, ActionClose } from '../../UI/Actions';
import ToolTipDecorator from '../../UI/ToolTipDecorator';
import FormItem from '../../UI/Form';

const emptyModule = {
    ModuleName: "Dummy name",
    ModuleCode: "XYZ",
    ModuleLevel: 4,
    ModuleYearID: 0,
    ModuleLeaderID: 0,
    ModuleImageURL: "https://images.freeimages.com/images/small-previews/293/cable-4-1243085.jpg",
}

export default function ModuleForm({ onDismiss, initialmodule=emptyModule}){
    // Initialisation --------------------------------------------
    const isValid = {
        ModuleName: (name) => name.length>8,
        ModuleCode: (code) => /^\D{2}\d{4}$/.test(code),
        ModuleLevel: (level) => (level > 2) && (level < 8),
        ModuleYearID: (id) => id !==0,
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

    const [years, setYears] = useState(null);
    const [loadingYearMessage, setLoadingYearMessage] = useState('Loading records ...');

    const getYears = async () => {
        const response = await API.get('/years');
        response.isSuccess
            ? setYears(response.result)
            : setLoadingYearMessage(response.message)
    };

    useEffect(()=> { getYears() }, []);

    const [leaders, setLeaders] = useState(null);
    const [loadingLeadersMessage, setLoadingLeadersMessage] = useState('Loading records ...');

    const getLeaders = async () => {
        const response = await API.get('/users/staff');
        response.isSuccess
            ? setLeaders(response.result)
            : setLoadingLeadersMessage(response.message)
    };

    useEffect(()=> { getLeaders() }, []);

    // Handlers --------------------------------------------------
    const handleChange= (event) => {
        const { name, value } = event.target;
        const newValue = (name === "ModuleLevel") || (name === 'ModuleYearID') || (name === 'ModuleLeaderID')? parseInt(value) : value;
        setModule({...module, [name]: newValue});
        setErrors({ ...errors, [name]: isValid[name](newValue) ? null : errorMessage[name]});
    };
    
    const isValidModule = (module) => {
        let isModuleValid = true;
        Object.keys(module).forEach((key)=>{
            if(isValid[key](module[key])) {
                errors[key] = null;
            } 
            else {
                errors[key] = errorMessage[key];
                isModuleValid = false;
            }
        });
        return isModuleValid; 
    };
    
    const handleCancel = () => onDismiss();

    const handleSubmit = () => { 
        isValidModule(module) && submit();
        setErrors({...errors});
    };

    // View ------------------------------------------------------
    return(
        <form className="BorderedForm">
            <FormItem
                label="Module name"
                htmlFor="ModuleName"
                advice="Please enter the name of the module"
                error={errors.ModuleName}
            >
                <input 
                type="text" 
                name="ModuleName"
                value={module.ModuleName}
                onChange={handleChange}
                />
            </FormItem> 

            <FormItem
                label="Module code"
                htmlFor="ModuleCode"
                advice="Please enter the module code"
                error={errors.ModuleCode}
            >
                <input 
                type="text" 
                name="ModuleCode"
                value={module.ModuleCode}
                onChange={handleChange}
            />
            </FormItem>
            
            <FormItem
                label="Module level"
                htmlFor="ModuleLevel"
                advice="Choose a level between 3 and 7 inclusive"
                error={errors.ModuleLevel}
            >
                <select 
                name="ModuleLevel"
                value={module.ModuleLevel}
                onChange={handleChange}
                >
                <option value="0" disabled>None selected</option>
                {
                    [3,4,5,6,7].map((level) => <option key={level}>{level}</option>)
                }
            </select>
            </FormItem>

            <FormItem
                label="Module year"
                htmlFor="ModuleYearID"
                advice="Select year of delivery"
                error={errors.ModuleYearID}
            >
                {
                    !years
                        ? <p>{loadingYearMessage}</p> 
                        : years.length === 0
                            ? <p>No records found</p>
                            : <select 
                                name="ModuleYearID"
                                value={module.ModuleYearID}
                                onChange={handleChange}
                            >
                                <option value="0" disabled>None selected</option>
                                {
                                    years.map((year) => <option key={year.YearID} value={year.YearID}>{year.YearName}</option>)
                                }
                            </select>
                }
            </FormItem>

            <FormItem
                label="Module leader"
                htmlFor="ModuleLeaderID"
                advice="Select module leader"
                error={errors.ModuleLeaderID}
            >
                {
                    !leaders
                        ? <p>{loadingLeadersMessage}</p> 
                        : leaders.length === 0
                            ? <p>No records found</p>
                            : <select 
                                name="ModuleLeaderID"
                                value={module.ModuleLeaderID}
                                onChange={handleChange}
                            >
                                <option value="0" disabled>None selected</option>
                                {
                                    leaders.map((leader) => <option key={leader.UserID} value={leader.UserID}>{leader.UserFirstname} {leader.UserLastname}</option>)
                                }
                            </select>
                }
            </FormItem>

            <FormItem
                label="Module image URL"
                htmlFor="ModuleImageURL"
                advice="Please enter the URL of the module's image"
                error={errors.ModuleImageURL}
            >
                <input 
                type="text" 
                name="ModuleImageURL"
                value={module.ModuleImageURL}
                onChange={handleChange}
                />
            </FormItem> 

            <ActionTray>
                <ToolTipDecorator message="Submit new module">
                    <ActionAdd showText onClick={handleSubmit} buttonText="Submit"/>
                </ToolTipDecorator>
                <ToolTipDecorator message="Cancel submission">
                    <ActionClose showText onClick={handleCancel} buttonText="Cancel"/>
                </ToolTipDecorator>
            </ActionTray>

        </form>
    );

}