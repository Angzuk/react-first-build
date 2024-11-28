import { useState, useEffect } from "react";

export default function useLoad() {

    // State ---------------------------------------------------------------------------------------------------------------
    const [records, setRecords] = useState(null);
    const [loadingMessage, setLoadingMessage] = useState('Loading records ...');

    // Methods -------------------------------------------------------------------------------------------------------------
    const loadRecords = async () => {
        const response = await API.get(`/modules`);
        response.isSuccess
            ? setRecords(response.result)
            : setLoadingMessage(response.message)
    };

    useEffect(()=> {loadRecords()}, []);
}