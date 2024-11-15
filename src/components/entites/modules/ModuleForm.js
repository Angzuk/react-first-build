import { useState } from 'react';

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

    );

}