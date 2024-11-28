import { useState, useEffect } from "react";

export default function useLoad() {

    // State ---------------------------------------------------------------------------------------------------------------
    const [modules, setModules] = useState(null);
    const [loadingMessage, setLoadingMessage] = useState('Loading records ...');

    const loadModules = async () => {
        const response = await API.get(`/modules`);
        response.isSuccess
            ? setModules(response.result)
            : setLoadingMessage(response.message)
    };

    useEffect(()=> {loadModules()}, []);
}